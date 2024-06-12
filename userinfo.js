var axios = require('axios');
var userData = {
    name: 'John Doe',
    email: 'john@example.com',
};
axios.post('https://your-vercel-app-url/api/users', userData.name, userData.email)
    .then(function (response) {
    console.log('User data pushed successfully:', response.data);
})
    .catch(function (error) {
    console.error('Error pushing user data:', error);
});
