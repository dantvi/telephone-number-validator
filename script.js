const userInputEl = document.getElementById('user-input');
const resultsEl = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

function validateInput() {
    let inputValue = userInputEl.value;
    if (inputValue === '') {
        alert('Please provide a phone number');
    }
}

function clearResults() {
    resultsEl.textContent = '';
}

checkBtn.addEventListener('click', validateInput);
clearBtn.addEventListener('click', clearResults);
