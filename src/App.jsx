import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './router/Router';

import './app.css';

const App = () => {
    return (
      <BrowserRouter>
        <div className='app'>
            <Router/>
        </div>
      </BrowserRouter>
    )
}

export default App