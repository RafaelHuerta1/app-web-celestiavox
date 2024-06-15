import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from "./error-page.jsx";
import CardsMain from './componentes/CardsMain.jsx';

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <CardsMain />,
      errorElement: <ErrorPage />,

    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />

    </>
  </React.StrictMode>,
)
