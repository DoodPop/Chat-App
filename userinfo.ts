var axios = require('axios');
var userData = {
    name: 'John Doe',
    email: 'john@example.com',
};
axios.post('https://chat-app-tawny-seven.vercel.app/chat.html', userData)
    .then(function (response) {
    console.log('User data pushed successfully:', response.Data);
})
    .catch(function (error) {
    console.error('Error pushing user data:', error);
});

