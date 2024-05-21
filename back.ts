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

function fetchUserProfile(token) {
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token)
      .then(response => response.json())
      .then(data => {
        console.log('User Profile:', data);
   
        document.body.innerHTML = `<h1>Hello, ${data.name}</h1><p>Email: ${data.email}</p><img src="${data.picture}" alt="Profile Picture">`;
      })
      .catch(error => console.error('Error fetching user profile:', error));
  }