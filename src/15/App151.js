import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

const App151 = () => {
    return (
        <>
            <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path='/' Component={ListPage}/>
                <Route path='/write' Component={WritePage}/>
            </Routes>
            </BrowserRouter>   
        </>
    );
};

export default App151;