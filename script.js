const userInputEl = document.getElementById('user-input');
const resultEl = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

function validateInput() {
    let inputValue = userInputEl.value;
    if (inputValue === '') {
        alert('Please provide a phone number');
    }
}

function clearResults() {
    console.log('clear');
}

checkBtn.addEventListener('click', validateInput);
clearBtn.addEventListener('click', clearResults);
