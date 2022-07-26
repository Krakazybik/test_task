import { createEffect, createEvent, createStore, sample } from 'effector';
import { api } from '../../shared/api';

const $articles = createStore<any>([]);
const $news = createStore([]);

const getNews = createEvent();
const getNewsFx = createEffect(async () => {
    const { data } = await api.getNews();
    return data;
});

sample({
    clock: getNews,
    target: getNewsFx,
});

sample({
    clock: getNewsFx.doneData,
    target: $news,
});

sample({
    clock: $news,
    target: createEffect(async (news: Array<number>) => {
        await Promise.all(news.map((item) => api.getArticle(item)));
    }),
});

export const model = {
    loadArticles: getNews,
    $articles,
};
