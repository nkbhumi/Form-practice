import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NewForm from './NewForm';
import NewFormwyup from './NewFormwyup';
import MultiStep from './MultiStep';
import DynamicForm from './DynamicForm';
import RHFForm from './RHFForm';
import RhfYupForm from './RhfYupForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RhfYupForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
