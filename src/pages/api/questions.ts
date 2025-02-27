//Marca el endpoint como dinamico para poder generar peticiones
export const prerender = false;

//Función GET para manejar solicitudes HTTP GET
export async function GET() {
    //Lista de preguntas
    const questions = [
        {
            id: 0,
            question: "¿Cuál de los siguientes es un tipo de glóbulo blanco?",
            options: ["Neurona", "Linfocito", "plaqueta", "Eritrocito"],
            answer: "Linfocito"
        },
        {
            id: 1,
            question: "¿Cuál es el órgano más grande del cuerpo humano?",
            options: ["Cerebro", "Hígado", "Piel", "Corazón"],
            answer: "Piel"
        },
        {
            id: 2,
            question: "¿Cuántos huesos tiene un adulto humano?",
            options: ["206", "208", "210", "212"],
            answer: "206"
        },
        {
            id: 3,
            question: "¿Cuál es la función principal de los riñones?",
            options: ["Bombear sangre", "Filtrar desechos de la sangre", "Producir insulina", "Almacenar bilis"],
            answer: "Filtrar desechos de la sangre"
        },
        {
            id: 4,
            question: "¿Qué vitamina es esencial para la coagulación de la sangre?",
            options: ["Vitamina A", "Vitamina C", "Vitamina K", "Vitamina D"],
            answer: "Vitamina K"
        },
        {
            id: 5,
            question: "¿Qué enfermedad es causada por la deficiencia de insulina?",
            options: ["Hipertensión", "Diabetes", "Anemia", "Osteoporosis"],
            answer: "Diabetes"
        },
        {
            id: 6,
            question: "¿Qué gas es transportado por los glóbulos rojos?",
            options: [" Dióxido de carbono", "Nitrógeno", "Oxígeno", "Hidrógeno"],
            answer: "Oxígeno"
        },
        {
            id: 7,
            question: "¿Cuál es el nombre del hueso más largo del cuerpo humano?",
            options: ["Fémur", "Húmero", "Radio", "Tibia"],
            answer: "Fémur"
        },
        {
            id: 8,
            question: "¿Cuál de los siguientes órganos produce bilis?",
            options: ["Páncreas", "Riñón", "Hígado", "Corazón"],
            answer: "Hígado"
        },
        {
            id: 9,
            question: "¿Cómo se llama la parte del ojo que controla la cantidad de luz que entra?",
            options: ["Retina", "Córnea", "Pupila", "Ojo"],
            answer: "Pupila"
        }
    ];

    //La lista de preguntas es devuelta en formato JSON
    return new Response(JSON.stringify(questions), {
        headers: { "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*", 
         },
        
    });
}
