var result;
const MULTIPLIER = 1000;

const populateOperation = () => {
    let operands = [];
    operands.push((Math.random()*MULTIPLIER) >> 0);
    operands.push((Math.random()*MULTIPLIER) >> 0);
    result = operands.reduce((a, b) => a + b);

    document.getElementById("operand1").innerText = operands[0];
    document.getElementById("operand2").innerText = operands[1];
    console.log(`result = ${result}`);
}

document.addEventListener('DOMContentLoaded',() => {
    document.getElementById("submit").addEventListener('click', () => {
        let r = Number(document.getElementById("result").value);
        if (r == result) {
            document.getElementById("result").style.borderColor = 'green';
        }
        else{
            document.getElementById("result").style.borderColor = 'red';
        }
    })
    document.getElementById("next").addEventListener('click', () => {
        document.getElementById("result").style.borderColor = 'blue';
        document.getElementById("result").value = '';
        populateOperation();
    })
    populateOperation();
});