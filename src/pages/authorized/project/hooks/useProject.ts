import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {projectQueryKeys} from "../../../../services/project/projectQueryKeys.ts";
import projectService from "../../../../services/project/ProjectService.ts";
import {useParams} from "react-router-dom";
import {EditProjectDto} from "../../../../services/project/models/EditProjectDto.ts";

export function useProject() {

    const {id} = useParams();
    const queryClient = useQueryClient();

    const getData = useQuery({
        queryKey: projectQueryKeys.project(id || ""),
        queryFn: () => projectService.getProjectDetails(id || ""),
        select: ({data}) => data,
        enabled: !!id
    })

    const edit = useMutation(
        {
            mutationFn: (data: EditProjectDto) => projectService.editProject(id || "", data),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: projectQueryKeys.project(id || "")});
            }
        })

    const remove= useMutation(
        {
            mutationFn: () => projectService.deleteProject(id || ""),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: projectQueryKeys.project(id || "")});
            }
        })

    return {
        getData,
        edit,
        remove
    }
}