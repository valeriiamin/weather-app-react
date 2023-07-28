import styles from './BoxInfo.module.css';

const CardBoxInfo = ({ data }) => {
    return (
        <div className={styles.boxItem}>
            <div className={styles.boxIcon}>{data.icon}</div>
            <div className={styles.item}>
                <h4>{data.text}</h4>
                <h3>{data.value}</h3>
            </div>
        </div>
    );
};

export default CardBoxInfo;
