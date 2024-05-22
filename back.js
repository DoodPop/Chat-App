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
