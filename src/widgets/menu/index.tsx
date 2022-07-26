import React from 'react';
import styles from './styles.module.scss';
import { Search } from './search';

const navigate = (url: string) => {
    window.location.href = url;
};

export const Menu = () => {
    return (
        <div className={styles.Menu}>
            <div className={styles.MenuItems}>
                <Search />
                <div onClick={() => navigate('https://google.com')}>Google</div>
                <div onClick={() => navigate('https://yandex.ru')}>Yandex</div>
                <div onClick={() => navigate('https://yahoo.com')}>Yahoo</div>
            </div>
        </div>
    );
};
