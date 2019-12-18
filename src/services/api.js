import axios from 'axios';

const API_URL = 'https://api.github.com';

axios.defaults.baseURL = API_URL;

// axios.interceptors.response.use(
//     res => {
//         console.log('http log res', res);
//         return res;
//     },
//     err => {
//         console.log('http err', err);
//         return Promise.reject(err);
//     },
// );

const { get } = axios;

export default {
    repository: {
        list: name => get(`/search/repositories?q=${name}`),
        commits: ({ owner, repo }) => get(`/repos/${owner}/${repo}/commits`),
    },
};
