const numberInput = document.getElementById('number');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const result = document.getElementById('result');
let dividableNumbers = [];
let sumAllNumbers = 0;

const calculateNumbers = () => {
    if (numberInput.value.trim() === '') {
        alert('enter a number in the field');
        return;
    }
    if (number1.value === number2.value) {
        alert('select different values');
        return;
    }
    for (let i = 1; i < +numberInput.value; i++) {
        if (i % +number1.value === 0 || i % +number2.value === 0) {
            dividableNumbers.push(i);
        }
    }

    dividableNumbers.map((num) => {
        sumAllNumbers += +num;
    });
    result.innerHTML = sumAllNumbers;
    dividableNumbers = [];
    sumAllNumbers = 0;
};
