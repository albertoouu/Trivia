/*
var app = "Trivia";
var userName = prompt("Bienvenido, ingresa tu nombre");
console.log(userName); // muestrame el username

//acceder a html desde javaScript document
document.getElementById("title").innerHTML = "Proyecto de " + app;
document.body.style.background = "pink";
//pintar en el document en el h2 el nombre ingresado del usuario
document.getElementById("user_name").innerHTML = "Bienvenido amigx " + userName;

var question1 = prompt("¿Cuántos años tienes?");
console.log(question1);

document.getElementById("receivedAnswer1").innerHTML =
  "Tu respuesta 1: " + question1;

var correctAnswer1 = 29;

document.getElementById("correctAnswer1").innerHTML =
  "La respuesta correcta era: " + correctAnswer1;

if (question1 == correctAnswer1) {
  alert("Correcto!");
} else {
  alert("Incorrecto ");
}
*/

const aceptacion = confirm("Quiere hacer una encuesta?");
if (aceptacion !== true) {
  alert("Que mal");
} else {
  let i = 0;
  alert("¿Asi que crees ser un maestro pokémon?");
  let nombre = prompt("¿Cual es tu nombre?", "Red");
  alert("muy bien : " + nombre);
  document.getElementById("userName").innerHTML = "Hola " + nombre;
  let p1 = prompt(
    "¿Cuál de los siguientes pokemon no es de tipo dragon? \n 1.Dragonite \n 2.Dratini \n 3.Dragonair \n 4.Charizard"
  );
  if (p1 == 4) {
    alert("correcto");
    i = i+1;
 //   document.querySelector("q1").insertAdjacentElement("beforeend", `<li>hhhoolla</li>`);
  } else {
    alert("incorrecto");
  }
  let p2 = prompt(
    "¿Cuando es el cumpleaños de Mewtwo? \n 1. 6 de Febrero \n 2. 5 de Junio \n 3. 11 de Junio \n 4. 31 de Diciembre"
  );
  if (p2 == 1) {
    alert("correcto");
    i=i+1;
  } else {
    alert("incorrecto");
  }
  let p3 = prompt(
    "Si al comenzar el juego nosotros elegíamos a Balbasaur, entonces nuestro rival escogia a ... \n 1.Balbasaur \n 2.Charmander \n 3.Eve \n 4.Squirtle"
  );
  if (p3 == 2) {
    alert("correcto");
    i=i+1;
  } else {
    alert("incorrecto");
  }
  let p4 = prompt(
    "¿Cuál de los siguientes no es un tipo de Pokemon visto en las primeras ediciones de los juegos originales? \n 1.Lucha \n 2.Psíquico \n 3.Acero \n 4.hielo"
  );
  if (p4 == 3) {
    alert("correcto");
    i=i+1;
  } else {
    alert("incorrecto");
  }
  let p5 = prompt(
    "¿Qué tipo de Pokémon es Mr. Mime en Pokémon Amarillo? \n 1.Psíquico \n 2.Lucha \n 3.Hada \n 4.Normal"
  );
  if (p5 == 1) {
    alert("correcto");
  } else {
    alert("incorrecto");
  }
  let p6 = prompt(
    "¿Qué es Missingno? \n 1.Un lider de gimnasio \n 2.Un objeto único \n 3.Un Pokémon legendario \n 4.Un error de programación"
  );
  if (p6 == 4) {
    alert("correcto");
  } else {
    alert("incorrecto");
  }
  let p7 = prompt(
    "¿Cuál es el ataque mas poderoso de Magikarp? \n 1.Placaje \n 2.Rayo solar \n 3.Ira dragón \n 4.Salpicadura"
  );
  if (p7 == 1) {
    alert("correcto");
  } else {
    alert("incorrecto");
  }
  let p8 = prompt(
    "¿Cómo evoluciona Pikachu? \n 1.A traves del intercambio \n 2.Con la piedra rayo \n 3.Con la piedra trueno \n 4.Llegando al nivel 26"
  );
  if (p8 == 3) {
    alert("correcto");
  } else {
    alert("incorrecto");
  }
  let p9 = prompt(
    "¿Cómo se llama el lider del Team Rocket? \n 1.Giovanni \n 2.Jessie \n 3.James \n 4.Meowht"
  );
  if (p9 == 1) {
    alert("correcto");
  } else {
    alert("incorrecto");
  }
  let p10 = prompt(
    "¿Cuál de estos no es un Pokémon legendario? \n 1.Articuno \n 2.Moltres \n 3.Zapdos \n 4.Gyarados"
  );
  if (p10 == 4) {
    alert("correcto");
  } else {
    alert("incorrecto");
  }
}
