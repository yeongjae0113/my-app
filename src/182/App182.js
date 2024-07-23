import React, { useState } from 'react';
import "./CSS/App.css";
import Top from './components/Top';
import Bottom from './components/Bottom';

const App182 = () => {


    return (
        <div className='container'>
            <h2>최상단 화면</h2>
            <Top number = {number}/>
            <Bottom addNumber = {addNumber}/>
        </div>
    );
};

export default App182;