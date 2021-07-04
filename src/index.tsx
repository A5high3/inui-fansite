import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@700" rel="stylesheet" />
    <script src="https://cdn.rawgit.com/mrdoob/three.js/r87/examples/js/libs/ammo.js"></script>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
