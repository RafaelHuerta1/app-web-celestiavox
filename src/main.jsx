import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from "./error-page.jsx";
import CardsMain from './componentes/CardsMain.jsx';

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import OracionesDiairas from './pages/OracionesDiairas.jsx';
import OracionesSantos from './pages/OracionesSantos.jsx';
import PlantillaOracion from './pages/PlantillaOracion.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <CardsMain />,
      errorElement: <ErrorPage />,

    },
    {
      path: "/oraciones-diarias",
      element: <OracionesDiairas />,
      errorElement: <ErrorPage />,

    },
    {
      path: "/oraciones-santos",
      element: <OracionesSantos />,
      errorElement: <ErrorPage />,

    },
    {
      path: "/plantilla-oracion/:id",
      element: <PlantillaOracion />,
      errorElement: <ErrorPage />,
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />

    </>
  </React.StrictMode>,
)
