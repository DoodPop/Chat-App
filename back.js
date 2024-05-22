function createMessageDiv(message) {
    var container = document.getElementsByClassName('container')[0];
    var newDiv = document.createElement('div');
    var chatcontainer = document.getElementsByClassName('concontainer')[0];
    newDiv.textContent = message;
    newDiv.className = 'message';
    container.appendChild(newDiv);
    chatcontainer.scrollTop = chatcontainer.scrollHeight;
}
function refreshInput() {
    var submitButton = document.getElementById('submitt');
    var inputField = document.getElementById('input');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        var message = inputField.value;
        if (message !== "") {
            createMessageDiv(message);
            inputField.value = "";
            console.log('Input Refreshed!');
        }
    });
}
refreshInput();
function displayUserInformation() {
    var userDataString = localStorage.getItem('userData');
    console.log('Retrieved userDataString from local storage:', userDataString);
    if (userDataString) {
        var userData = JSON.parse(userDataString);
        console.log('Parsed userData:', userData);
        var imageElement = document.getElementById('image');
        var nameElement = document.querySelector('.name');
        var emailElement = document.getElementById('email');
        imageElement.src = userData.picture;
        nameElement.textContent = userData.name;
        emailElement.textContent = userData.email;
    }
    else {
        console.error('User data not found in local storage.');
    }
}
window.onload = displayUserInformation;
