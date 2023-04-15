// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App';


// const domNode = document.getElementById('root')
// const root = createRoot(domNode)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const domNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  domNode
);
