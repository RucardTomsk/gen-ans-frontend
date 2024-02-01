import {createBrowserRouter, Navigate} from "react-router-dom";
import {Links} from "../constants/links.ts";
import ProjectsPage from "./authorized/projects";
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
                    element: <Navigate to={Links.Authorized.Projects}/>
                },
                {
                    path: Links.Authorized.Projects,
                    element: <ProjectsPage/>,
                },
                {
                    path: Links.Authorized.Project,
                    element: <div>HELL</div>,
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
