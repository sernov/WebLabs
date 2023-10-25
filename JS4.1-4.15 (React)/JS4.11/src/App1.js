import React, { useState } from 'react';
import './styles.css';

export default function App1() {
    const [count, setCount] = useState(0);

    return (
        <div className="app1-container">
            <h1 className="app1-heading">10 лайфхаков для идеальной долгой поездки. Не пропусти!</h1>
            <p className="app1-description">
                Все, что ты должен знать, чтобы сделать свою дальнюю поездку действительно комфортной. Читай сейчас!
            </p>
            <a href="#" className="app1-read-more">ЧИТАТЬ ДАЛЕЕ</a>
        </div>
    );
}
