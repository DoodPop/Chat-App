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
function fetchGoogleUserProfile(accessToken) {
    fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
            'Authorization': "Bearer ".concat(accessToken)
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        displayUserProfile(data);
    })
        .catch(function (error) {
        console.error('Error fetching user profile:', error);
    });
}
function displayUserProfile(userData) {
    var imageElement = document.getElementById('image');
    var nameElement = document.querySelector('.name');
    var emailElement = document.getElementById('email');
    imageElement.src = userData.picture;
    nameElement.textContent = userData.name;
    emailElement.textContent = userData.email;
}
function onSignIn(googleUser) {
    var authResponse = googleUser.getAuthResponse();
    var accessToken = authResponse.access_token;
    fetchGoogleUserProfile(accessToken);
}
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('.header-container');
    var tabOffset = header.offsetHeight;
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= tabOffset) {
            header.classList.add('fixed');
        }
        else {
            header.classList.remove('fixed');
        }
    });
});
