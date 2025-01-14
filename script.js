// Declare global variables

let firstNum=' ';
let operator=' ';
let newNum = true;


// use getElementByid to get the value from display box
let display = document.getElementById('display');

// function to capture numbers
function addNumber(num)
{
    display.value=num;
}