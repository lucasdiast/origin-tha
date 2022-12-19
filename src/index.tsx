import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GoalsProvider } from './providers/goals/goals';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GoalsProvider>
      <App />
    </GoalsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
