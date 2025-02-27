# 📌 Quiz de Medicina 🩺

Este es un proyecto de **quiz interactivo** construido con **Astro, React y Tailwind CSS**, implementanndo el uso de una API para el manejo y validación de preguntas. Donde los usuarios pueden evaluar sus conocimientos en medicina a través de preguntas de opción múltiple. 🚀
Con el objetivo de prueba técnica para Kotplik ⚕.

# Puedes probarlo en el siguiente enlance 🌐
### https://koplik-medical-quiz.vercel.app/

## 🚀 Instalación y Ejecución

### 🎨 Ejecutar el Frontend

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Vedroom/koplik-medical-quiz.git
   cd koplik-medical-quiz
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
    *En caso de faltar dependencias es necesario instalarlas, en consola se mostrará las necesarias.*
3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
4. Accede a la aplicación en [http://localhost:4321](http://localhost:4321).

### 🔗 Ejecutar la API
Si el backend está integrado dentro del mismo proyecto en **Astro**, simplemente correr `npm run dev` debería ser suficiente.  

```sh
cd backend
npm install
npm start
```
Por defecto, la API debería estar accesible en [http://localhost:4321/api/questions](http://localhost:4321/api/questions).

## 🛠️ Tecnologías Utilizadas

✔ **Astro**: Framework para servir React con un rendimiento optimizado.  
✔ **React**: Para manejar la lógica de las preguntas y respuestas.  
✔ **Tailwind CSS**: Para el diseño responsivo y estilización moderna.  
✔ **Vercel**: Para subirlo a la web y poder ver el funcionamiento sin necesidad de instalaciones.

## 📁 Estructura del Proyecto

```text
/
├── public/  
├── src/
│   ├── components/
│   │   └── QuestionList.jsx
│   ├── pages/
│   │   └── index.astro
│   │   ├── api/
│   │   │   └── questions.ts
│   │   │   └── validate.ts
│   ├── styles/
│   │   └── global.css
│   │   └── img/
│   │   │   └── koplik.ico
└── tailwind.config.cjs
└── package.json
```

## 🧞 Comandos Útiles

Todos los comandos se ejecutan desde la raíz del proyecto, en la terminal:

| Comando                  | Acción                                              |
|--------------------------|-----------------------------------------------------|
| `npm install`            | Instala las dependencias                           |
| `npm run dev`            | Inicia el servidor en `localhost:4321`             |
| `npm run build`          | Genera la versión de producción en `./dist/`       |
| `npm run preview`        | Previsualiza el build antes de desplegarlo         |
| `npm run astro ...`      | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help`| Muestra ayuda sobre el CLI de Astro                |

## 💡 Decisiones de Diseño y Posibles Mejoras

### 🎨 **Decisiones de Diseño**
✔ **Diseño minimalista y responsivo** con **Tailwind CSS**.  
✔ **Uso de colores médicos** (`azul/verde pastel`).  
✔ **Transiciones suaves** entre preguntas y respuestas con animaciones.  
✔ **Temporizador visual** con **barra de progreso dinámica**.  
✔ **Accesibilidad** con **fuente Roboto ExtraLight (200)** para una mejor lectura.

### 🚀 **Posibles Mejoras**
🔹 **Soporte para más preguntas** con una base de datos.  
🔹 **Modo oscuro** con Tailwind (`dark mode`).  
🔹 **Retroalimentación en vivo** con respuestas explicadas.    
🔹 **Multijugador** con integración WebSockets para competir en vivo.

## 🧪 Instrucciones para Probar la Aplicación 


1. **Abrir en navegador**: Accede a [https://koplik-medical-quiz.vercel.app/](https://koplik-medical-quiz.vercel.app/) o localmente [http://localhost:4321](http://localhost:4321).  
2. **Iniciar el quiz** con el botón “Iniciar Quiz”.  
3. **Responder preguntas** seleccionando una opción.  
4. **Observar el temporizador** y cómo la barra de progreso se reduce.  
5. **Ver respuestas correctas/incorrectas** con animaciones.  
6. **Al finalizar**, se muestra la puntuación y la opción de reiniciar.  
7. **Si el tiempo se agota**, la respuesta contará como incorrecta.

## 👀 Documentación utilizada


1. **Astro**: [https://docs.astro.build/en/getting-started/](https://docs.astro.build/en/getting-started/)
2. **React**: [https://es.react.dev/](https://es.react.dev/).
3. **Astro-endpoints**: [https://docs.astro.build/en/guides/endpoints/](https://docs.astro.build/en/guides/endpoints/).
4. **Typescript**: [https://www.typescriptlang.org/](https://www.typescriptlang.org/).
5. **Implementación de Vercel**: [https://docs.astro.build/en/guides/integrations-guide/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel).


## 🛠️ **Desarrollado por:** Edwin Israel Velacio Moreno 🐜👨‍💻






