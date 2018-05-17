import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { BrowserRouter } from 'react-router-dom';

const render = () => ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
, document.getElementById('root'));
render();

if(module.hot){
  module.hot.accept('./components/app.jsx', render);
}
