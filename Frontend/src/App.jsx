import React from 'react';
import Main_Banner from "./components/Main_Banner";
import "./App.css";
import Topics from './components/Topics';
import KeyDates from './components/KeyDates';

const App = () => {
    return (
        <>
            <div className='flex flex-col'>
                <Main_Banner />
                <Topics />
                <KeyDates />
            </div>
        </>
    )
}

export default App;