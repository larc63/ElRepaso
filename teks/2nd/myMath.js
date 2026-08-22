var result;
const NUM_OPERANDS = 2;
const MULTIPLIER = 100;

const OPERATOR_LIST = ['+', '-'];
const populateOperation = () => {
    let operands = [];
    let operators = [];
    const op = document.getElementById('operation');
    // populate arrays of operands and operators
    for (let i = 0; i < NUM_OPERANDS; i++) {
        operands.push((Math.random()*MULTIPLIER) >> 0);
        if(i < NUM_OPERANDS -1)
        {
            operators.push(OPERATOR_LIST[(Math.random()*OPERATOR_LIST.length) >> 0]);
        }
    }

    const lbl = document.createElement('label');
    lbl.innerText = operands.pop();
    op.appendChild(lbl);
    result = Number(lbl.innerText);

    for (let i = 1; i < NUM_OPERANDS; i++) {
        operator = operators[i - 1];

        const opLabel = document.createElement('label');
        opLabel.innerText = operator;
        op.appendChild(opLabel);

        const label = document.createElement('label');
        label.innerText = operands.pop();
        op.appendChild(label);
        
        switch (operator) {
            case '+':
                result += Number(label.innerText); 
                break;
            case '-':
                result -= Number(label.innerText); 
                break;
            case '*':
                result *= Number(label.innerText); 
                break;
            case '/':
                result /= Number(label.innerText); 
                break;
                
                default:
                    break;
        }
    }

    const label = document.createElement('label');
    label.innerText = '=';
    op.appendChild(label);

    const text = document.createElement('input');
    text.id = 'result';
    text.type = 'text';
    text.inputMode = 'decimal';
    op.appendChild(text);
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
        const op = document.getElementById('operation');
        op.innerHTML = '';
        populateOperation();
    })
    populateOperation();
});