///////////////////////////// Variables /////////////////////////////
let numbers = document.querySelectorAll("#number"),
    operations = document.querySelectorAll(".operation"),
    decimalBTn = document.querySelector("#decimal"),
    backBtn = document.querySelector("#back"),
    clear = document.querySelectorAll("#clear"),
    resultBtn = document.querySelector("#equal"),
    sqrtBtn = document.querySelector("#sqrt"),
    screen= document.querySelector("#screen"),
    memoryCurrentNumber = "0",
    memoryNewNumber = false,
    memoryOperator = "";
    

    
///////////////////////////// Listeners /////////////////////////////
// Number press
for (i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function(e) {
        numPress(e.target.textContent);
    });
}

// Operations press
for (i = 0; i < operations.length; i++) {
    let oper = operations[i];
    oper.addEventListener("click", function(e) {
        operation(e.target.textContent);
    });
}

// C or CE press
for (i = 0; i < clear.length; i++) {
    let clearBtn = clear[i];
    clearBtn.addEventListener("click", function(e) {
        clearScreen(e.target.textContent);
    });
}

// Back press
backBtn.onclick = () => {
    let currentScreen = screen.textContent;
    screen.textContent = currentScreen.substring(0, currentScreen.length - 1);
};

// Square root press
sqrtBtn.onclick = () => {
    let sqrtRes = Math.sqrt(Number(screen.textContent));
    screen.textContent = sqrtRes.toFixed(8);
};

// Decimal press
decimalBTn.onclick = () => {
    let current = screen.textContent;

    if (memoryNewNumber) {
        current = "0.";
        memoryNewNumber = false;
    } else {
        if (current.indexOf(".") === -1) {
            current = current + ".";
        }
    }

    screen.textContent = current;
};

///////////////////////////// Functions /////////////////////////////
// When the button with number is pressed
function numPress(number) {
    if (memoryNewNumber) {
        screen.textContent = number;
        memoryNewNumber = false;
    } else {
        if (screen.textContent === "0") {
            screen.textContent = number;
        } else {
            screen.textContent = screen.textContent + number;
        }
    }
}

// When te button with operation is pressed
function operation(operator) {
    let currentNum = Number(screen.textContent);

    if (memoryNewNumber && memoryOperator !== "=") {
        screen.textContent = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;

        if (memoryOperator === "+") {
            memoryCurrentNumber = Number(memoryCurrentNumber) + currentNum;
        } else if (memoryOperator === "-") {
            memoryCurrentNumber = Number(memoryCurrentNumber) - currentNum;
        } else if (memoryOperator === "÷") {
            memoryCurrentNumber = Number(memoryCurrentNumber) / currentNum;
        } else if (memoryOperator === "×") {
            memoryCurrentNumber = Number(memoryCurrentNumber) * currentNum;
        } else if (memoryOperator === "x¹") {
            memoryCurrentNumber = Number(memoryCurrentNumber) ** currentNum;
        } else {
            memoryCurrentNumber = Number(currentNum).toFixed(8);
        }

        screen.textContent = memoryCurrentNumber;
        memoryOperator = operator;
    }
}

// When the button C or CE is pressed
function clearScreen(btn) {
    let clickedClearBtn = btn;

    if (clickedClearBtn === "C") {
        memoryCurrentNumber = "0";
        memoryNewNumber = false;
        memoryOperator = "";

        screen.textContent = memoryCurrentNumber;
    } else if (clickedClearBtn === "CE") {
        screen.textContent = "0";
    }
}

