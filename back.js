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
function fetchUserProfile(token) {
    console.log('Access Token:', token);
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token)
        .then(function (response) {
        console.log('Response Status:', response.status);
        return response.json();
    })
        .then(function (data) {
        console.log('User Profile:', data);
        // Store user data in local storage
        localStorage.setItem('userData', JSON.stringify(data));
        displayUserInformation(data);
    })
        .catch(function (error) {
        console.error('Error fetching user profile:', error);
    });
}
function displayUserInformation(userData) {
    var imageElement = document.getElementById('image');
    var nameElement = document.querySelector('.name');
    var emailElement = document.getElementById('email');
    if (userData) {
        imageElement.src = userData.picture;
        nameElement.textContent = userData.name;
        emailElement.textContent = userData.email;
    }
    else {
        console.error('User data not found.');
    }
}
function handleOAuthResponse() {
    var hash = window.location.hash.substr(1);
    var result = hash.split('&').reduce(function (res, item) {
        var parts = item.split('=');
        res[parts[0]] = parts[1];
        return res;
    }, {});
    if (result.access_token) {
        var token = result.access_token;
        fetchUserProfile(token);
    }
    else {
        var userDataString = localStorage.getItem('userData');
        if (userDataString) {
            var userData = JSON.parse(userDataString);
            displayUserInformation(userData);
        }
    }
}
window.onload = handleOAuthResponse;
window.onload = displayUserInformation;
