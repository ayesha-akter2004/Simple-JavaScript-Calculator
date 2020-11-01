// selection all elements

const prevSpan = document.getElementById("prevSpan");
const currentSpan = document.getElementById("currentSpan");
const allClear = document.querySelector(".allClear");
const deleteButton = document.querySelector(".deleteButton");
const countOperation = document.querySelectorAll(".countOperation");
const number = document.querySelectorAll(".number");
const decimalOperation = document.querySelector(".decimalOperation");
const equalOperation = document.querySelector(".equalOperation");

// all functionality

// for clicking AC button
allClear.addEventListener("click", () => {
  prevSpan.innerText = 0;
  currentSpan.innerText = "";
});

// for clicking delete button
deleteButton.addEventListener("click", () => {
  let currentValue = currentSpan.textContent;
  currentSpan.innerText = currentValue.slice(0, -1); // select the last character of current span
});

// for clicking any number button
number.forEach((number) => {
  number.addEventListener("click", () => {
    let numberValue = number.textContent;
    currentSpan.innerText += numberValue;
  });
});

// for decimal operator
decimalOperation.addEventListener("click", () => {
  if (currentSpan.innerText.includes(".")) {
    // if already include a decimal operator
    return;
  } else if (currentSpan.textContent == "") {
    // if the current span is empty
    currentSpan.innerText = 0 + decimalOperation.textContent;
  } else {
    // if it is eligagle
    currentSpan.innerText += decimalOperation.textContent;
  }
});

// for each operations
countOperation.forEach((countOperation) => {
  countOperation.addEventListener("click", () => {
    let operationType = countOperation.textContent; // get the operation type (+, -, *, /)
    let prevValue = parseFloat(prevSpan.textContent); // get the previous value
    let currentValue = parseFloat(currentSpan.textContent); // get the current value
    if (operationType == "+") {
      if (prevValue > 0) {
        prevSpan.innerText =
          parseFloat(prevValue + currentValue) + operationType;
      } else {
        prevSpan.innerText = parseFloat(currentValue) + operationType;
      }
    } else if (operationType == "-") {
      if (prevValue > 0) {
        prevSpan.innerText =
          parseFloat(prevValue - currentValue) + operationType;
      } else {
        prevSpan.innerText = parseFloat(currentValue) + operationType;
      }
    } else if (operationType == "×") {
      if (prevValue > 0) {
        prevSpan.innerText =
          parseFloat(prevValue * currentValue) + operationType;
      } else {
        prevSpan.innerText = parseFloat(currentValue) + operationType;
      }
    } else if (operationType == "÷") {
      if (prevValue > 0) {
        prevSpan.innerText =
          parseFloat(prevValue / currentValue) + operationType;
      } else {
        prevSpan.innerText = parseFloat(currentValue) + operationType;
      }
    } else {
      return;
    }
    currentSpan.innerText = "";
  });
});

// for equal
equalOperation.addEventListener("click", () => {
  let prevText = prevSpan.textContent;
  let prevValue = parseFloat(prevText.slice(0, -1));
  let operationType = prevText.charAt(prevText.length - 1);
  let currentValue = parseFloat(currentSpan.textContent);
  if (operationType == "+") {
    if (prevValue > 0) {
      currentSpan.innerText = parseFloat(prevValue + currentValue);
    } else {
      currentSpan.innerText = parseFloat(currentValue);
    }
  } else if (operationType == "-") {
    if (prevValue > 0) {
      currentSpan.innerText = parseFloat(prevValue - currentValue);
    } else {
      currentSpan.innerText = parseFloat(currentValue);
    }
  } else if (operationType == "×") {
    if (prevValue > 0) {
      currentSpan.innerText = parseFloat(prevValue * currentValue);
    } else {
      currentSpan.innerText = parseFloat(currentValue);
    }
  } else if (operationType == "÷") {
    if (prevValue > 0) {
      currentSpan.innerText = parseFloat(prevValue / currentValue);
    } else {
      currentSpan.innerText = parseFloat(currentValue);
    }
  } else {
    return;
  }
  prevSpan.innerText = "";
});

// initial all function on keydown
const keyInitial = (e) => {
  let keyValue = e.key;
  if (keyValue >= 0 && keyValue <= 9) {
    currentSpan.innerText += keyValue;
  } else if (
    keyValue == "+" ||
    keyValue == "-" ||
    keyValue == "*" ||
    keyValue == "/"
  ) {
    let operationType = keyValue; // get the operation type (+, -, *, /)
    let prevValue = parseFloat(prevSpan.textContent); // get the previous value
    let currentValue = parseFloat(currentSpan.textContent); // get the current value
    if (operationType == "+") {
      if (prevValue > 0) {
        prevSpan.innerText =
          parseFloat(prevValue + currentValue) + operationType;
      } else {
        prevSpan.innerText = parseFloat(currentValue) + operationType;
      }
    } else if (operationType == "-") {
      if (prevValue > 0) {
        prevSpan.innerText =
          parseFloat(prevValue - currentValue) + operationType;
      } else {
        prevSpan.innerText = parseFloat(currentValue) + operationType;
      }
    } else if (operationType == "*") {
      if (prevValue > 0) {
        prevSpan.innerText =
          parseFloat(prevValue * currentValue) + operationType;
      } else {
        prevSpan.innerText = parseFloat(currentValue) + operationType;
      }
    } else if (operationType == "/") {
      if (prevValue > 0) {
        prevSpan.innerText =
          parseFloat(prevValue / currentValue) + operationType;
      } else {
        prevSpan.innerText = parseFloat(currentValue) + operationType;
      }
    } else {
      return;
    }
    currentSpan.innerText = "";
  } else if (keyValue == ".") {
    if (currentSpan.innerText.includes(".")) {
      // if already include a decimal operator
      return;
    } else if (currentSpan.textContent == "") {
      // if the current span is empty
      currentSpan.innerText = 0 + decimalOperation.textContent;
    } else {
      // if it is eligagle
      currentSpan.innerText += decimalOperation.textContent;
    }
  } else if (keyValue == "Backspace" || keyValue == "Delete") {
    let currentValue = currentSpan.textContent;
    currentSpan.innerText = currentValue.slice(0, -1); // select the last character of current span
  } else if (keyValue == "Enter") {
    let prevText = prevSpan.textContent;
    let prevValue = parseFloat(prevText.slice(0, -1));
    let operationType = prevText.charAt(prevText.length - 1);
    let currentValue = parseFloat(currentSpan.textContent);
    if (operationType == "+") {
      if (prevValue > 0) {
        currentSpan.innerText = parseFloat(prevValue + currentValue);
      } else {
        currentSpan.innerText = parseFloat(currentValue);
      }
    } else if (operationType == "-") {
      if (prevValue > 0) {
        currentSpan.innerText = parseFloat(prevValue - currentValue);
      } else {
        currentSpan.innerText = parseFloat(currentValue);
      }
    } else if (operationType == "*") {
      if (prevValue > 0) {
        currentSpan.innerText = parseFloat(prevValue * currentValue);
      } else {
        currentSpan.innerText = parseFloat(currentValue);
      }
    } else if (operationType == "/") {
      if (prevValue > 0) {
        currentSpan.innerText = parseFloat(prevValue / currentValue);
      } else {
        currentSpan.innerText = parseFloat(currentValue);
      }
    } else {
      return;
    }
    prevSpan.innerText = "";
  }
};
document.addEventListener("keydown", keyInitial);
