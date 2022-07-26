import React from 'react';
import { Article } from './widgets/article';
import { Menu } from './widgets/menu';
import styles from './styles.module.scss';
import { Button } from './shared/ui/button';
import { useEvent, useList } from 'effector-react';
import { articlesModel } from './entites/articles';

const App = () => {
    const articles = useList(articlesModel.$articles, (item: any) => (
        <Article header={item.title} preview={item.title} />
    ));
    const loadArticles = useEvent(articlesModel.loadArticles);

    return (
        <div className={styles.Layout}>
            <div className={styles.ArticlesWrapper}>
                <Button onClick={loadArticles}>Загрузить статьи</Button>
                <div className={styles.Articles}>{articles}</div>
            </div>
            <Menu />
        </div>
    );
};

export default App;
