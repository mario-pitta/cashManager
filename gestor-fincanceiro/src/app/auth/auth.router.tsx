import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LogonPage } from "./logon";
import { SignupPage } from "./signup";





const routes = createBrowserRouter([
    {
        element: <LogonPage />,
        path: 'login'
    },
    {
        element: <SignupPage />,
        path: 'signup'
    }
])

export function AuthRouter() {
    return <RouterProvider router={routes} />
}