import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type ButtonProps = PropsWithChildren<{
    onClick: () => void;
}>;

export const Button = ({ onClick, children }: ButtonProps) => (
    <div className={styles.Button} onClick={() => onClick}>
        {children}
    </div>
);
