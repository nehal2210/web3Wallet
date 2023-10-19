import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Wallet from '../pages/Wallet';
import Create from '../pages/Create';
import Test from '../pages/Test';

function AppRouter() {

    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/wallet" Component={Wallet} />
            <Route path="/create" Component={Create} />
            <Route path="/test" Component={Test} />
        </Routes>
    );
};

export default AppRouter;
