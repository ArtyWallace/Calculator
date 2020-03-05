let numbers = document.querySelectorAll("#number"),
    operations = document.querySelectorAll(".operation"),
    decimalBTn = document.querySelector("#decimal"),
    clear = document.querySelectorAll("#clear"),
    resultBtn = document.querySelector("#equal"),
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
    })
}

function numPress(number) {
    if (memoryNewNumber) {
        screen.textContent = number;
        memoryNewNumber = false;
    } else {
        if (screen.textContent === "0") {
            screen.textContent = number;
        } else {
            screen.textContent += number;
            memoryCurrentNumber = screen.textContent;
        }
    }
}

function operation(operator) {
    let currentNum = Number(screen.textContent);
    let currentOperator = operator;
    screen.textContent = currentOperator;

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

        // console.log(memoryCurrentNumber);
        // console.log(memoryNewNumber);
        // console.log(memoryOperator);

        screen.textContent = memoryCurrentNumber;
    }

    
}





