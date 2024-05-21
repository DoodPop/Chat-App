function createMessageDiv(message) {
    var container = document.getElementsByClassName('container')[0];
    var newDiv = document.createElement('div');
    newDiv.textContent = message;
    newDiv.className = 'message';
    container.appendChild(newDiv);
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
function fetchUserProfile(token) {
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log('User Profile:', data);
        document.body.innerHTML = "<h1>Hello, ".concat(data.name, "</h1><p>Email: ").concat(data.email, "</p><img src=\"").concat(data.picture, "\" alt=\"Profile Picture\">");
    })
        .catch(function (error) { return console.error('Error fetching user profile:', error); });
}
