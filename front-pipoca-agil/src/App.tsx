import React from 'react';
import './App.css'

import { Home } from './screens/Home'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'

import Themes from './themes/'
import Routes from './routes/Routes';


export default function App() {
  return (
    <ThemeProvider theme={Themes}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>   
    </ThemeProvider>
    
  );
}


