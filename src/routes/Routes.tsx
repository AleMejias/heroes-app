import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";

import { DcPage , MarvelPage , SearchHeroesPage, SingleHeroePage } from '../heroes/index';
import { LoginPage } from "../auth/index";

export const router = createBrowserRouter([


    {

      path: 'login',
      element: <LoginPage />
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/marvel",
          element: <MarvelPage />,
        },
        {
          path: "/dc",
          element: <DcPage />,
        },
        {
          path: "/search",
          element: <SearchHeroesPage />,
        },
        {
          path: "/heroe/:id",
          element: <SingleHeroePage />,
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/",
          element: <MarvelPage />,
        },
      ]
    }
  
  ]);