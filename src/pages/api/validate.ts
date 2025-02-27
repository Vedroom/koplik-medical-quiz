//Marca el endpoint como dinamico para poder generar peticiones
export const prerender = false;

//Lista de preguntas con su respuesta correcta
const questions = [
  { id: 0, answer: "Linfocito" },
  { id: 1, answer: "Piel" },
  { id: 2, answer: "206" },
  { id: 3, answer: "Filtrar desechos de la sangre" },
  { id: 4, answer: "Vitamina K" },
  { id: 5, answer: "Diabetes" },
  { id: 6, answer: "Oxígeno" },
  { id: 7, answer: "Fémur" },
  { id: 8, answer: "Hígado" },
  { id: 9, answer: "Pupila" }
];

//Funcion que maneja las peticiones POST 
export async function POST({ request }: { request: Request }) {
  try {
    const textData = await request.text();
    //Validación de que la petición no esté vacía
    if (!textData) {
      return new Response(JSON.stringify({ error: "Cuerpo de la solicitud vacío:0" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const { questionId, selectedAnswer } = JSON.parse(textData);

    //Validación de que la respuesta y la solicitud existan
    if (questionId === undefined || selectedAnswer === undefined) {
      return new Response(JSON.stringify({ error: "Datos incompletos:/" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const question = questions.find(q => q.id === Number(questionId));
    //Validación de que exista la pregunta
    if (!question) {
      return new Response(JSON.stringify({ error: "La pregunta no existe:(" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }

    //Comparación de que la respuesta sea la correcta
    const isCorrect = question.answer === selectedAnswer;

    //Envíar el estado de la respuesta
    return new Response(JSON.stringify({ correct: isCorrect }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Error en /api/validate:", error);
    return new Response(JSON.stringify({ error: "Error interno del servidor :" + error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
