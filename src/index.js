import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <>
            <Header />
            <h1>Carolina Huddle</h1>
        </>
    </React.StrictMode>
);
