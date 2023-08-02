let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
const text = "Esperamos te diviertas.";
typewriter
  .pauseFor(2500)
  .typeString(text)
  .pauseFor(200)
  .deleteChars(10)
  .start();