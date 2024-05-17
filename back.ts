function createMessageDiv(message: string): void {
    const container = document.getElementsByClassName('container')[0] as HTMLElement;
    const newDiv = document.createElement('div');
    newDiv.textContent = message;
    newDiv.className = 'message';
    container.appendChild(newDiv);
}

function refreshInput(): void {
    const submitButton = document.getElementById('submitt') as HTMLButtonElement;
    const inputField = document.getElementById('input') as HTMLInputElement;

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
