import styles from './styles.module.scss';

export const Article = ({ header, url }: any) => {
    return (
        <div className={styles.Article}>
            <div className={styles.Header}>{header}</div>
            <a href={url} className={styles.Link}>
                Читать полностью
            </a>
        </div>
    );
};
