// Create a function that prints a landscape defining flat land and mountains

// Aprendemos el concepto de NESTED SCOPE donde las funciones dentro de una función tienen acceso a las Variables creadas para la funcion contenedora y las que se crean dentro de ellas estan separadas entre sí

var landscape = function() {
  var land = "";
  var flat = function (size) {
    for (var i = 0; i < size; i++)
      land += "_";
  }
  var mountain = function (size) {
    land += "/";
    for (var i = 0; i < size; i++)
      land += "'";
    land += "\\";
  }

  flat(5);
  mountain(4);
  flat(2);
  mountain(1);
  flat(3);
  mountain(10);
  flat(20);

  return land;
}
console.log(landscape());
