/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    /*Archivos a los que le vamos a incorporar tailwind*/
    "./index.html", "./src/**/*.jsx" /*busca todos los archivos de forma recursiva en src que contengan la extensión .jsx*/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}