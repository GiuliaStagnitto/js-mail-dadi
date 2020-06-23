

document.getElementById('tira').addEventListener("click", function (){
  var utente = Math.floor(Math.random() * 6 + 1);
  var cpu = Math.floor(Math.random() * 6 + 1);
  console.log(utente);
  console.log(cpu);
  if (utente > cpu) {
    console.log("Hai vinto!");
  } else if (utente < cpu) {
    console.log("Ha vinto il computer...");
  } else {
    console.log("Avete pareggiato, ritenta");
  }
});
