import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToolProvider from './context/ToolContext';

ReactDOM.render(
  <React.StrictMode>
    <ToolProvider>
      <App />
    </ToolProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
