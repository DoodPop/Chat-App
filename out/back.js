function createMessageDiv(message) {
    const container = document.getElementsByClassName('container')[0];
    const newDiv = document.createElement('div');
    const chatcontainer = document.getElementsByClassName('concontainer')[0];
    newDiv.textContent = message;
    newDiv.className = 'message';
    container.appendChild(newDiv);
    chatcontainer.scrollTop = chatcontainer.scrollHeight;
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
function fetchGoogleUserProfile(accessToken) {
    fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(data => {
        displayUserProfile(data);
    })
        .catch(error => {
        console.error('Error fetching user profile:', error);
    });
}
function displayUserProfile(userData) {
    const imageElement = document.getElementById('image');
    const nameElement = document.querySelector('.name');
    const emailElement = document.getElementById('email');
    imageElement.src = userData.picture;
    nameElement.textContent = userData.name;
    emailElement.textContent = userData.email;
}
function onSignIn(googleUser) {
    const authResponse = googleUser.getAuthResponse();
    const accessToken = authResponse.access_token;
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
//# sourceMappingURL=back.js.map