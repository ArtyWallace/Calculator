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
    

    
////////////////////////////////////////////////////////

for (i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function(e) {
        numPress(e.target.textContent);
    });
}

for (i = 0; i < operations.length; i++) {
    let oper = operations[i];
    oper.addEventListener("click", function(e) {
        operation(e.target.textContent);
    });
}

for (i = 0; i < clear.length; i++) {
    let clearBtn = clear[i];
    clearBtn.addEventListener("click", function(e) {
        clearScreen(e.target.textContent);
    });
}

backBtn.addEventListener("click", back);

sqrtBtn.addEventListener("click", sqrtFu);

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

function operation(operator) {
    let currentNum = Number(screen.textContent);

    console.log(currentNum);

    if (memoryNewNumber && memoryOperator !== "=") {
        screen.textContent = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;

        if (memoryOperator === "+") {
            memoryCurrentNumber = Number(memoryCurrentNumber) + currentNum;
        } else if (memoryOperator === "-") {
            memoryCurrentNumber = Number(memoryCurrentNumber) - currentNum;
        } else if (memoryOperator === "/") {
            memoryCurrentNumber = Number(memoryCurrentNumber) / currentNum;
            console.log(memoryCurrentNumber);
        } else if (memoryOperator === "*") {
            memoryCurrentNumber = Number(memoryCurrentNumber) * currentNum;
        } else if (memoryOperator === "x¹") {
            memoryCurrentNumber = Number(memoryCurrentNumber) ** currentNum;
        } else {
            memoryCurrentNumber = Number(currentNum);
        }

        screen.textContent = memoryCurrentNumber;
        memoryOperator = operator;
        console.log(memoryOperator);
    }
}

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

function back() {
    console.log("we are here");
    let currentScreen = screen.textContent;
    screen.textContent = currentScreen.substring(0, currentScreen.length - 1);
}

function sqrtFu() {
    let sqrtRes = Math.sqrt(Number(screen.textContent));
    screen.textContent = sqrtRes;
}



