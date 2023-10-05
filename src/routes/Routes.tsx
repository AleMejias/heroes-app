import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";

import { DcPage , MarvelPage } from '../heroes/index';
import { LoginPage } from "../auth/index";

export const router = createBrowserRouter([


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