const axiosConfig = {
    method: 'POST',
    url: 'https://servs.vercel.app/',
    data: {
        user_name: userData.name, 
        user_email: userData.email
    }
};

axios.post('https://servs.vercel.app', userData)
    .then(function (response) {
        console.log('User data pushed successfully:', response.userdata);
    })
    .catch(function (error) {
        console.error('Error pushing user data:', error);
    });
