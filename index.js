let inputValue = '';

function appendToinput(value) {
    inputValue += value;
    document.getElementById('input').value = inputValue;
}

function clearinput() {
    inputValue = '';
    document.getElementById('input').value = inputValue;
}

function calculate() {
    try {
        inputValue = eval(inputValue);
        document.getElementById('input').value = inputValue;
    } catch (error) {
        document.getElementById('input').value = 'Ошибка';
    }
    if (inputValue >= 0) {
        document.body.style.background = 'green'
    }
    else {
        document.body.style.background = 'rgb(188, 74, 74)'
    }
}
