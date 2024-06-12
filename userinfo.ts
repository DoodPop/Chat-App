const axios = require('axios');


const userData = {
  name: 'John Doe',
  email: 'john@example.com',
 
};


axios.post('https://your-vercel-app-url/api/users', userData.name, userData.email)
  .then(response => {
    console.log('User data pushed successfully:', response.data);
  })
  .catch(error => {
    console.error('Error pushing user data:', error);
  });
