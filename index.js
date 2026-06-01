<<<<<<< HEAD
let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
=======
function gum(a,b) {
    return a+b
}
console.log(gum(5,4));
>>>>>>> 33b75d13d8077258480d92edb8b4a132b061a302
