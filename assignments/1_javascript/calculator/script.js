// V1 - NO CALCULATION

// let expression = '';

// document.querySelectorAll('.button').forEach(button => {
//     button.addEventListener("click", () => {

//         let buttonVal = button.getAttribute("value");
//         console.log(buttonVal);

//         if (buttonVal === "C") {
//             expression = '';
//         }
//         else {
//             expression += buttonVal;
//         }

//         document.getElementById("display").innerText = expression;

//     });
// })



// V2 - WITH CALCULATION

// let expression = '';
// let num1 = 0;
// let opr = '';

// document.querySelectorAll('.button').forEach(button => {
//     button.addEventListener("click", () => {

//         let buttonVal = button.getAttribute("value");

//         if (buttonVal === "C") {
//             expression = '';
//         }

//         else if(buttonVal === "+") {
//             num1 = expression;
//             opr = '+';
//             expression = '';    
//         }

//         else if(buttonVal === "-") {
//             num1 = expression;
//             opr = '-';
//             expression = '';    
//         }

//         else if(buttonVal === "x") {
//             num1 = expression;
//             opr = '*';
//             expression = '';    
//         }

//         else if(buttonVal === "/") {
//             num1 = expression;
//             opr = '/';
//             expression = '';    
//         }


//         else if(buttonVal === "=") {
//             if(opr === "+") {
//                 expression = Number(num1) + Number(expression);
//             }
//             else if(opr === "-"){
//                 expression = Number(num1) - Number(expression);
//             }
//             else if(opr === "*"){
//                 expression = Number(num1) * Number(expression);
//             }
//             else if(opr === "/"){
//                 expression = Number(num1) / Number(expression);
//             }
//         }

//         else {
//             expression += buttonVal;
//         }

//         document.getElementById("display").innerText = expression;

//     });
// })



// V3 - IMPROVED DISPLAY

// let expression = '';
// let dispExpression = '';
// let num1 = 0;
// let opr = '';

// document.querySelectorAll('.button').forEach(button => {
//     button.addEventListener("click", () => {

//         let buttonVal = button.getAttribute("value");

//         if (buttonVal === "C") {
//             expression = '0';
//         }

//         else if(buttonVal === "+") {
//             num1 = expression;
//             opr = '+';
//             dispExpression += '+';
//             expression = '';
//         }

//         else if(buttonVal === "-") {
//             num1 = expression;
//             opr = '-';
//             dispExpression += '-';
//             expression = '';    
//         }

//         else if(buttonVal === "x") {
//             num1 = expression;
//             opr = '*';
//             dispExpression += 'x';
//             expression = '';    
//         }

//         else if(buttonVal === "/") {
//             num1 = expression;
//             opr = '/';
//             dispExpression += '/';
//             expression = '';    
//         }


//         else if(buttonVal === "=") {
//             if(opr === "+") {
//                 expression = Number(num1) + Number(expression);
//                 dispExpression = expression;
//             }
//             else if(opr === "-"){
//                 expression = Number(num1) - Number(expression);
//                 dispExpression = expression;
//             }
//             else if(opr === "*"){
//                 expression = Number(num1) * Number(expression);
//                 dispExpression = expression;
//             }
//             else if(opr === "/"){
//                 expression = Number(num1) / Number(expression);
//                 dispExpression = expression;
//             }
//         }

//         else {
//             expression += buttonVal;
//             dispExpression += buttonVal;
//         }
//         document.getElementById("display").innerText = dispExpression;
//     });
// })


// V4 - IMPROVED DISPLAY 2

// let expression = '';
// let num1 = 0;
// let opr = '';

// document.querySelectorAll('.button').forEach(button => {
//     button.addEventListener("click", () => {

//         let buttonVal = button.getAttribute("value");

//         if (buttonVal === "C") {
//             expression = '';
//             document.getElementById("display").innerText = expression;
//         }

//         else if(buttonVal === "+") {
//             num1 = expression;
//             opr = '+';
//             document.getElementById("display").innerText += '+';
//             expression = '';    
//         }

//         else if(buttonVal === "-") {
//             num1 = expression;
//             opr = '-';
//             document.getElementById("display").innerText += '-';
//             expression = '';    
//         }

//         else if(buttonVal === "x") {
//             num1 = expression;
//             opr = '*';
//             document.getElementById("display").innerText += 'x';
//             expression = '';    
//         }

//         else if(buttonVal === "/") {
//             num1 = expression;
//             opr = '/';
//             document.getElementById("display").innerText += '/';
//             expression = '';    
//         }


//         else if(buttonVal === "=") {
//             if(opr === "+") {
//                 expression = Number(num1) + Number(expression);
//             }
//             else if(opr === "-"){
//                 expression = Number(num1) - Number(expression);
//             }
//             else if(opr === "*"){
//                 expression = Number(num1) * Number(expression);
//             }
//             else if(opr === "/"){
//                 expression = Number(num1) / Number(expression);
//             }
//             document.getElementById("display").innerText = expression;
//         }

//         else {
//             expression += buttonVal;
//             document.getElementById("display").innerText += buttonVal;
//         }
//     });
// })



// V5 - IMPROVED DISPLAY 3

let expression = '';
let num1 = 0;
let opr = '';
let equalFlag = 0;

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener("click", () => {

        let buttonVal = button.getAttribute("value");

        if (buttonVal === "C") {
            expression = '';
            document.getElementById("display").innerText = '0';
        }

        else if (buttonVal === "+") {
            num1 = expression;
            opr = '+';
            expression = '';
        }

        else if (buttonVal === "-") {
            num1 = expression;
            opr = '-';
            expression = '';
        }

        else if (buttonVal === "x") {
            num1 = expression;
            opr = '*';
            expression = '';
        }

        else if (buttonVal === "/") {
            num1 = expression;
            opr = '/';
            expression = '';
        }


        else if (buttonVal === "=") {
            equalFlag = 1;
            if (opr === "+") {
                expression = Number(num1) + Number(expression);
                document.getElementById("display").innerText = expression;
            }
            else if (opr === "-") {
                expression = Number(num1) - Number(expression);
                document.getElementById("display").innerText = expression;
            }
            else if (opr === "*") {
                expression = Number(num1) * Number(expression);
                document.getElementById("display").innerText = expression;
            }
            else if (opr === "/") {
                expression = Number(num1) / Number(expression);
                document.getElementById("display").innerText = expression;
            }
        }

        else {
            if (equalFlag === 1) {
                expression = '';
                equalFlag = 0;
            }
            expression += buttonVal;
            document.getElementById("display").innerText = expression;
        }

    });
})