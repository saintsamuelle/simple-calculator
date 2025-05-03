let display = document.getElementById("display");

// Append input to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value); // Note: eval() is used here for simplicity (not safe for production!)
  } catch (error) {
    display.value = "Error";
  }
}