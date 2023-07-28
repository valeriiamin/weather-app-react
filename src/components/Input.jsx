import styles from '../App.module.css';
const Input = ({ query, search, handleInputChange }) => {
    return (
        <div className={styles.search}>
            <input
                placeholder="City..."
                onChange={(e) => {
                    handleInputChange(e);
                }}
                value={query}
                onKeyDown={search}
            />
        </div>
    );
};

export default Input;
