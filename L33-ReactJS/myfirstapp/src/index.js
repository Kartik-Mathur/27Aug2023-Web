import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import List from './Components/List';
import Todo from './Components/Todo';

let componentToLoad = 'List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App> </App>
  <div>
    { componentToLoad == 'App' && <App />}
    { componentToLoad == 'List' && <List />}
    { componentToLoad == 'Todo' && <Todo />}
  </div>
);
