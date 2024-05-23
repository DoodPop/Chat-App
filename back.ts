function createMessageDiv(message: string): void {
    const container = document.getElementsByClassName('container')[0] as HTMLElement;
    const newDiv = document.createElement('div');
    const chatcontainer = document.getElementsByClassName('concontainer')[0] as HTMLElement;
    newDiv.textContent = message;
    newDiv.className = 'message';
    container.appendChild(newDiv);
    chatcontainer.scrollTop = chatcontainer.scrollHeight;
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







function displayUserInformation(userData) {
    const imageElement = document.getElementById('image');
    const nameElement = document.querySelector('.name');
    const emailElement = document.getElementById('email');
    var userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        imageElement.src = userData.picture;
        nameElement.textContent = userData.name;
        emailElement.textContent = userData.email;
    } else {
        console.error('User data not found.');
    }
}



window.onload = displayUserInformation;
