import styles from '../App.module.css';
import BoxInfo from './BoxInfo';
import MainInfo from './MainInfo';

const Info = ({ weather, dateBuilder, error }) => {
    return (
        <div>
            <div>
                {typeof weather.main != 'undefined' ? (
                    <div>
                        <MainInfo weather={weather} dateBuilder={dateBuilder} />
                        <BoxInfo weather={weather} />
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div>
                {error.cod === '404' ? (
                    <div className={styles.error}>
                        Error {error.cod}, {error.message}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Info;
