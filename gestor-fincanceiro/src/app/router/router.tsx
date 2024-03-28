import {  createBrowserRouter, RouterProvider } from "react-router-dom";


import  {AccountsPage}  from "../components/layout/components/content/pages/accounts";
import { DashboardPage } from "../components/layout/components/content/pages/dashboard";
import { ExtratosPage } from "../components/layout/components/content/pages/extratos";
import { CalendaryPage } from "../components/layout/components/content/pages/calendary";
import { LabelPage } from "../components/layout/components/content/pages/labels";
import { LogonPage } from "../auth/logon";
import { AuthRouter } from "../auth/auth.router";
import { Layout } from "../components/layout";
// import { PagesRouter } from "../components/layout/components/content/pages/pages.router";
import { SignupPage } from "../auth/signup";

export default function Router() {
  return (

    <RouterProvider router={paths} />
  );
};


const paths = createBrowserRouter([
  {

    path: 'auth',
    // loader: AuthRouter,
    children: [
      {
        element: <LogonPage />,
        path: 'login'
      },
      {
        element: <SignupPage />,
        path: 'signup'
      },
    ]
  },
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        element: <DashboardPage />,
        path: 'home'
      },
      {
        element: <AccountsPage />,
        path: 'accounts'
      },
      {
        element: <LabelPage />,
        path: 'labels'
      },
      {
        element: <ExtratosPage />,
        path: 'extracts'
      },
      {
        element: <CalendaryPage />,
        path: 'calendary'
      },
    ]
  },

])