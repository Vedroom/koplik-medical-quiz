import { useEffect, useState } from "react";

// URL de la API para obtener las preguntas y respectivas respuestas
const API_URL = "/api/questions";
const TIMER_DURATION = 5; // Duración del temporizador en segundos

function QuestionList() {
    // Estados del componente
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);

    // Obtener las preguntas al montar el componente
    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch((error) => console.error("Error al obtener preguntas:", error));
    }, []);

    // Manejo del temporizador con animación fluida
    useEffect(() => {
        if (quizStarted && !quizFinished && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            handleTimeOut();
        }
    }, [quizStarted, timeLeft, quizFinished]);

    // Función que maneja el tiempo agotado
    const handleTimeOut = () => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(TIMER_DURATION);
        } else {
            setQuizFinished(true);
        }
    };

    // Función para manejar la selección de una respuesta
    const handleSelectAnswer = (answer) => {
        if (selectedAnswer) return;
        const correct = questions[currentQuestionIndex].answer === answer;
        setSelectedAnswer(answer);
        setIsCorrect(correct);
        if (correct) {
            setScore((prevScore) => prevScore + 1);
        }
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
                setTimeLeft(TIMER_DURATION);
            } else {
                setQuizFinished(true);
            }
        }, 1500);
    };

    // Función para reiniciar el quiz
    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setQuizFinished(false);
        setQuizStarted(false);
        setTimeLeft(TIMER_DURATION);
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-800 via-blue-600 to-teal-500 text-gray-100 p-4 font-roboto font-extralight">

            <div className="relative w-full max-w-2xl bg-white p-6 rounded-lg shadow-xl flex flex-col">
                {/* Vista inicial para iniciar quiz */}
                {!quizStarted ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold flex items-center justify-center gap-2 text-blue-700">
                            ¿Crees saber lo fundamental de medicina?
                        </h2>
                        <p className="text-lg mt-4 text-gray-700 font-extralight">
                            Veamos qué tanto sabes. ¡Pon a prueba tus conocimientos!
                        </p>
                        <button
                            className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold rounded-lg transition duration-300"
                            onClick={() => setQuizStarted(true)}
                        >
                            Iniciar Quiz
                        </button>
                    </div>
                ) : quizFinished ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-blue-700">¡Quiz terminado!</h2>
                        <p className="text-lg mt-4 text-gray-700 font-extralight">
                            Tu puntuación: {score} / {questions.length}
                        </p>
                        <button
                            className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold rounded-lg transition duration-300"
                            onClick={restartQuiz}
                        >
                            Intentar de nuevo
                        </button>
                    </div>
                ) : questions.length > 0 ? (
                    <div className="w-full h-full flex flex-col">
                        {/* Panel de pregunta */}
                        <div className="flex items-center justify-center h-1/2 p-6 bg-gradient-to-r from-blue-700 to-teal-500 rounded-t-lg">
                            <h2 className="text-xl font-semibold text-center text-white">
                                {questions[currentQuestionIndex].question}
                            </h2>
                        </div>
                        {/* Barra de progreso del temporizador debajo de la pregunta */}
                        {quizStarted && !quizFinished && (
                            <div className="relative w-full left-1/2 transform -translate-x-1/2 w-11/12 h-2 bg-white">
                                <div
                                    className="h-full bg-gradient-to-r from-red-300 via-red-400 to-red-500 transition-all ease-linear duration-1000"
                                    style={{ width: `${(timeLeft / TIMER_DURATION) * 100}%` }}
                                ></div>
                            </div>
                        )}

                         {/* Panel de opciones */}
                        <div className="grid grid-cols-2 gap-4 h-1/2 p-6 bg-white rounded-b-lg">
                            {questions[currentQuestionIndex].options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`w-full h-24 flex items-center justify-center rounded-lg text-lg font-extralight transition duration-300 transform 
                    ${selectedAnswer
                                            ? option === questions[currentQuestionIndex].answer
                                                ? "bg-green-500 scale-105 text-white"
                                                : "bg-red-500 scale-95 text-white"
                                            : "bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white"}`}
                                    onClick={() => handleSelectAnswer(option)}
                                    disabled={!!selectedAnswer}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-lg text-gray-900 font-extralight">Cargando preguntas...</p>
                )}
            </div>
        </div>
    );
}

export default QuestionList;
