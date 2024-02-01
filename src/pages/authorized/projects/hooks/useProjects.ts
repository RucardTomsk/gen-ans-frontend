import {useQuery} from "@tanstack/react-query";
import {projectQueryKeys} from "../../../../services/project/projectQueryKeys.ts";
import projectService from "../../../../services/project/ProjectService.ts";

export function useProjects() {

    return useQuery({
        queryKey: projectQueryKeys.projects(),
        queryFn: () => projectService.getProjects(),
        select: ({data}) => data,
    })
}