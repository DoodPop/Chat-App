// Function to initiate OAuth authentication
function oauthSignIn() {
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  var redirectURI = 'https://chat-app-tawny-seven.vercel.app/chat.html'; // Update with your actual redirect URI

  var form = document.createElement('form');
  form.setAttribute('method', 'GET');
  form.setAttribute('action', oauth2Endpoint);

  var params = {
      'client_id': '3574196466-ck8gl2id3cv2dolhkrtnpdp1cbi5m4hq.apps.googleusercontent.com',
      'redirect_uri': redirectURI,
      'response_type': 'token',
      'scope': 'profile email',
      'include_granted_scopes': 'true',
      'state': 'pass-through value'
  };

  for (var p in params) {
      if (params.hasOwnProperty(p)) {
          var input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', p);
          input.setAttribute('value', params[p]);
          form.appendChild(input);
      }
  }

  document.body.appendChild(form);
  form.submit();
}

// Function to fetch user profile using access token
function fetchUserProfile(token) {
  console.log('Access Token:', token);

  fetch('https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=' + token)
      .then(function (response) {
          console.log('Response Status:', response.status);
          return response.json();
      })
      .then(function (data) {
          console.log('User Profile:', data);
          localStorage.setItem('userData', JSON.stringify(data));
          window.location.href = 'chat.html';
      })
      .catch(function (error) {
          console.error('Error fetching user profile:', error);
      });
}

// Check if there's an access token in the URL (after successful OAuth authentication)
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('access_token')) {
  var accessToken = urlParams.get('access_token');
  fetchUserProfile(accessToken);
}
