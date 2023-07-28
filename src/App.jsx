import { useState } from 'react';
import styles from './App.module.css';
import axios from 'axios';
import Input from './components/Input';
import Info from './components/Info';
import Header from './components/Header';
import Button from './components/Button.jsx';

const api = {
    key: '92d2c4a48a6b8e07a11c95ccb9bdf749',
    base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [error, setError] = useState({});

    function handleInputChange(e) {
        setQuery(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        axios
            .get(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
            .then((response) => {
                setQuery('');
                setError('');
                setWeather(response.data);
                return response.data;
            })
            .catch(function (er) {
                setWeather('');
                setError(er.response.data);
            });
    };

    const dateBuilder = (d) => {
        let months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${date} ${month} ${year}`;
    };
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.searchField}>
                <Input query={query} handleInputChange={handleInputChange} />
                <Button onClick={search} />
            </div>
            <div className={styles.content}>
                <Info
                    weather={weather}
                    dateBuilder={dateBuilder}
                    error={error}
                />
            </div>
            <div className={styles.footer}>
                Created with 💖 by Valeriia{' '}
                <a href="https://github.com/valeriiamin">visit GitHub</a>
            </div>
        </div>
    );
}

export default App;
