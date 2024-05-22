function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {
    'client_id': '3574196466-ck8gl2id3cv2dolhkrtnpdp1cbi5m4hq.apps.googleusercontent.com',
    'redirect_uri': 'https://chat-app-tawny-seven.vercel.app/chat.html',
    'response_type': 'token',
    'scope': 'profile email',
    'include_granted_scopes': 'true',
    'state': 'pass-through value'
  };

  // Add form parameters as hidden input values.
  for (var p in params) {
    if (params.hasOwnProperty(p)) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}
function fetchGoogleUserProfile(accessToken) {
  fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
          'Authorization': `Bearer ${accessToken}`
      }
  })
  .then(response => response.json())
  .then(data => {
      // Store user data in local storage
      localStorage.setItem('data', JSON.stringify(data));
      console.log('Stored user data:', data); // Log the stored user data for verification
      displayUserProfile(data);
  })
  .catch(error => {
      console.error('Error fetching user profile:', error);
  });
}

function displayUserProfile(data) {
  // Optional: Display user profile on the login page
  console.log('User profile data:', data);
}

function onSignIn(googleUser) {
  const authResponse = googleUser.getAuthResponse();
  const accessToken = authResponse.access_token;

  fetchGoogleUserProfile(accessToken);
}
