const axios = require('axios');
const userData = require('./back.js');
const axiosConfig = {
    method: 'POST',
    url: 'https://servs.vercel.app/',
    data: {
        user_name: userData.name,
        user_email: userData.email
    }
};
axios(axiosConfig)
    .then(function (response) {
    console.log('User data pushed successfully:', response.data);
})
    .catch(function (error) {
    console.error('Error pushing user data:', error);
});
//# sourceMappingURL=userinfo.js.map