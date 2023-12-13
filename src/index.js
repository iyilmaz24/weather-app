import './style.css';
import makeApiCall from './weatherAPI';


const nameInput = document.getElementById("inputBox");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
    makeApiCall(nameInput.value)
});


