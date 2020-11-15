import axios from 'axios';

const getUsers = async () => {
    // return axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.data);
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

export {
    getUsers
};