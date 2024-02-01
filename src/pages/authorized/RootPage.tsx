import React from "react";
import {Outlet} from "react-router-dom";
import {ReactRouter6Adapter} from "use-query-params/adapters/react-router-6";
import {QueryParamProvider} from "use-query-params";
import WorkSpaceLayout from "../../components/workspaceLayout";

const RootPage: React.FC = () => {
    return (
        <QueryParamProvider adapter={ReactRouter6Adapter} options={{removeDefaultsFromUrl: true}}>
            <WorkSpaceLayout>
                <Outlet/>
            </WorkSpaceLayout>
        </QueryParamProvider>
    )
}

export default RootPage;