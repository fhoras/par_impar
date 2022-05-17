let num = document.getElementById("num1");

btnDatos1.addEventListener("click", () => {
  let num1: number = num.value;
  if (num1 == 0) {
    console.log("El " + num1 + " no es par ni impar");
  } else if (num1 % 2 != 0) {
    console.log("El " + num1 + " es impar");
  } else {
    console.log("El " + num1 + " es par");
  }
});
