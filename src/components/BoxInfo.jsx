import styles from './BoxInfo.module.css';
import CardBoxInfo from './CardBoxInfo';
import { FaTemperatureLow } from 'react-icons/fa';
import { MdSsidChart } from 'react-icons/md';
import { GiWaterDrop } from 'react-icons/gi';
import { FiWind } from 'react-icons/fi';

const BoxInfo = ({ weather }) => {
    const boxWeatherData = [
        {
            id: 1,
            icon: <FaTemperatureLow />,
            text: 'Feels like',
            value: `${weather.main.feels_like} °C`,
        },
        {
            id: 2,
            icon: <MdSsidChart />,
            text: 'Pressure',
            value: `${weather.main.pressure} hPa`,
        },
        {
            id: 3,
            icon: <GiWaterDrop />,
            text: 'Humidity',
            value: `${weather.main.humidity} %`,
        },
        {
            id: 4,
            icon: <FiWind />,
            text: 'Wind',
            value: `${weather.wind.speed} m/s`,
        },
    ];
    return (
        <div className={styles.boxInfo}>
            {boxWeatherData.map((item) => {
                return <CardBoxInfo data={item} key={item.id} />;
            })}
        </div>
    );
};

export default BoxInfo;
