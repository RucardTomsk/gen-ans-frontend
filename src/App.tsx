import './App.scss'
import {RouterProvider} from "react-router-dom";
import {anonymousRoutes, authorizedRoutes} from "./pages/router.tsx";
import {useAuth} from "./providers/auth";
import {Suspense} from "react";
import {useSetupInstanceInterceptors} from "./api/useSetupInstanceInterceptors.ts";

const App = () => {

    const {isAuth} = useAuth();
    useSetupInstanceInterceptors();

    return (
        <Suspense fallback={<div></div>} >
            <RouterProvider
                router={isAuth ? authorizedRoutes() : anonymousRoutes()}
            />
        </Suspense>
    )
}

export default App
