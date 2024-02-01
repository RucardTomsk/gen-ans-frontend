import {createBrowserRouter, generatePath, Navigate} from "react-router-dom";
import {Links} from "../constants/links.ts";
import CasePage from "./authorized/case";
import LoginPage from "./unauthorized/login";
import RegisterPage from "./unauthorized/register";
import RootPage from "./authorized/RootPage.tsx";
import NotFoundPage from "./common/notFound";

export const authorizedRoutes = () =>
    createBrowserRouter([
        {
            path: "/",
            element: <RootPage/>,
            children: [
                {
                    path: "/",
                    element: <Navigate to={generatePath(Links.Authorized.Case, {caseId: "683600e2-2e90-43f5-afa9-2415615441ca"})}/>
                },
                {
                    path: Links.Authorized.Case,
                    element: <CasePage/>,
                }
            ]
        },
        {
            path: "*",
            element: <NotFoundPage/>,
        },
    ])

export const anonymousRoutes = () =>
    createBrowserRouter([
        {
            path: "/",
            element: <Navigate to={Links.Unauthorized.Login}/>
        },
        {
            path: Links.Unauthorized.Login,
            element: <LoginPage/>
        },
        {
            path: Links.Unauthorized.Register,
            element: <RegisterPage/>
        },
        {
            path: "*",
            element: <Navigate to={Links.Unauthorized.Login}/>,
        },
    ])
