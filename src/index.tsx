import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Welcome from './views/Welcome/Welcome';
import Editor from './views/Editor/Editor';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/welcome",
    element: <Welcome />,
  },

  {
    path: "/editor",
    element: <Editor />,
  },


]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router} />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
