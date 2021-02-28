var nome = prompt("Inserisci il tuo nome");
document.getElementById('nome').innerHTML = nome;
console.log(nome);

var cognome = prompt("Inserisci il tuo cognome");
document.getElementById('cognome').innerHTML = cognome;
console.log(cognome);

var colore = prompt("Colore preferito");
document.getElementById('colore').innerHTML = colore;
console.log(colore);

document.getElementById('password').innerHTML = nome + cognome + colore + 21;
