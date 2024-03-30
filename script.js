const userInputEl = document.getElementById('user-input');
const resultsEl = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
let inputValue = '';

function validatePhoneNumber(phoneNumber) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
    if (regex.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
  }

function validateInput() {
    inputValue = userInputEl.value;
    if (inputValue === '') {
        alert('Please provide a phone number');
    }
    console.log(validatePhoneNumber(inputValue));
}

function clearResults() {
    resultsEl.textContent = '';
}

checkBtn.addEventListener('click', validateInput);
clearBtn.addEventListener('click', clearResults);
