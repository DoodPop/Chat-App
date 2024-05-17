function createMessageDiv(message) {
    const container = document.getElementsByClassName('container')[0];
    const newDiv = document.createElement('div');
    newDiv.textContent = message;
    newDiv.className = 'message';
    container.appendChild(newDiv);
}
function refreshInput() {
    const submitButton = document.getElementById('submitt');
    const inputField = document.getElementById('input');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const message = inputField.value;
        if (message !== "") {
            createMessageDiv(message);
            inputField.value = "";
            console.log('Input Refreshed!');
        }
    });
}
refreshInput();
//# sourceMappingURL=back.js.map