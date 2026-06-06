function check() {
  const inputNumber = document.getElementById("input").value;
  var output1 = document.getElementById("output1");
  var output2 = document.getElementById("output2");

  let x = 2;
  let y = inputNumber;

  if (y > 99999999) {
    document.getElementById("output1").textContent = "";
    document.getElementById("output2").textContent = "";
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    alert(
      "Es sind keine Zahlen über 99'999'999 erlaubt, da die Berechnung lange dauern würde",
    );
    return;
  }

  if (y < 3) {
    document.getElementById("output1").textContent = "";
    document.getElementById("output2").textContent = "";
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    alert(
      "Es gibt keine negativen Primzahlen, 1 ist keine Primzahl und 2 ist eine Primzahl, aber dieses Tool ist nicht für soooo einfache Fragen ausgelegt!",
    );
    return;
  }

  while (x <= y - 1) {
    const rest = y % x;
    if (rest === 0) {
      output1.textContent = "Deine Zahl ist keine Primzahl";
      output2.textContent = "";
      return;
    } else {
      output2.textContent = "Deine Zahl ist eine Primzahl";
      output1.textContent = "";
    }
    x++;
  }
}

function reset() {
  document.getElementById("output1").textContent = "";
  document.getElementById("output2").textContent = "";
  document.getElementById("input").value = "";
  document.getElementById("input").focus();
}
