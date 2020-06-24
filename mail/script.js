var mail = ["giulia@gmail.com", "lorenzo@hotmail.it" ];
console.log(mail);

document.getElementById('cerca').addEventListener("click", function(){

  var utente = prompt("Inserisci la tua mail");
  var trovato = false;

  for (var i = 0; i < mail.length; i++) {
    if (utente === mail[i]) {
      trovato = true;
    }

    if (trovato) {
      console.log("la tua mail è nel database");
    } else {
      console.log("la mail inserita non è tra quelle nel database");
    }
    

  }

});
