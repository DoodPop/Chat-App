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
}
window.onload = handleOAuthResponse;
