import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@700" rel="stylesheet" />
    <App />
  </StrictMode>,
);
