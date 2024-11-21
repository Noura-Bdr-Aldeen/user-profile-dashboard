import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SearchContextProvider } from "../src/context/SearchContext"
import App from './App';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchContextProvider>
        <App />  
    </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
