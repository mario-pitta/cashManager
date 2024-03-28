import { createBrowserRouter } from "react-router-dom"
import { DashboardPage } from "./dashboard"
import { AccountsPage } from "./accounts"
import { LabelPage } from "./labels"
import { ExtratosPage } from "./extratos"
import { CalendaryPage } from "./calendary"

export const PagesRouter = () => {
    return createBrowserRouter([
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
    ])
}