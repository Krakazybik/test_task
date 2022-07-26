import axios from 'axios';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const api = {
    getNews: () =>
        axiosInstance.get('/topstories.json?print=pretty.json&limitToFirst=30&orderBy="$key"'),
    getArticle: (id: number) => axiosInstance.get(`/item/${id}.json?print=pretty.json`),
};
