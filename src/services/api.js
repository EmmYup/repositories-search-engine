import axios from 'axios';

const API_URL = 'https://api.github.com';

axios.defaults.baseURL = API_URL;

const { get } = axios;

export default {
    repository: {
        list: name => get(`/search/repositories?q=${name}`),
        commits: ({ owner, repo }) => get(`/repos/${owner}/${repo}/commits`),
    },
};
