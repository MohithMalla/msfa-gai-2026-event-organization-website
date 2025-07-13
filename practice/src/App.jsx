import React from 'react';
import Top_Title from "./components/Top";
import Main_Banner from "./components/Main_Banner";
import "./App.css";

const App = () => {
    return (
        <>
            <div className='flex flex-col'>
                <Top_Title />
                <Main_Banner />
            </div>

        </>
    )
}

export default App;