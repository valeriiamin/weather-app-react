import styles from '../App.module.css';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            search
        </button>
    );
};

export default Button;
