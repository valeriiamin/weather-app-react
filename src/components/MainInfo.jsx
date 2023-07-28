import styles from '../App.module.css';

const MainInfo = ({ weather, dateBuilder }) => {
    return (
        <div>
            <div className={styles.weather}>
                <div className={styles.location}>
                    <h2 className={styles.city}>
                        {weather.name}, {weather.sys.country}
                    </h2>
                    <p className={styles.date}>{dateBuilder(new Date())}</p>
                    <h1 className={styles.temp}>
                        {Math.round(weather.main.temp)}°C
                    </h1>
                    <p className={styles.description}>
                        {weather.weather[0].main}
                    </p>
                </div>
                <div className={styles.icon}>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="icon-weather"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
