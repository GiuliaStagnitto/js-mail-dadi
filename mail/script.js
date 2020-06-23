var mail = ["giulia@gmail.com", "lorenzo@hotmail.it" ];
console.log(mail);

document.getElementById('cerca').addEventListener("click", function(){

  var utente = prompt("Inserisci la tua mail");

  for (var utente = 0; utente < mail.length; utente++) {
    if (utente = mail) {
      console.log("la tua mail è nel database");
    } else if (utente |= mail) {
      console.log("la mail inserita non è tra quelle nel database");
    }
  }

});
