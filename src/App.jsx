import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from "./layout/AppLayout";
import RequireAuth from "./components/RequireAuth";

import RedirectLink from "./pages/RedirectLink";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashbord";
import LinkPage from "./pages/Link";
import Auth from "./pages/Auth";
import UrlProvider from './context';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <LinkPage />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);





function App() {
   return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
    
  )
}

export default App
