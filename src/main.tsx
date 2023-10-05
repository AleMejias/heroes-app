import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// import { HeroesApp } from './Heroes'

import './style.css'
import { MarvelPage } from './heroes/pages/MarvelPage';
import { DcPage } from './heroes/pages/DcPage';
import { LoginPage } from './auth/pages/LoginPage';


const router = createBrowserRouter([
  {
    path: "/marvel",
    element: <MarvelPage />,
  },
  {
    path: "/dc",
    element: <DcPage />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <MarvelPage />,

  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
