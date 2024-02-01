import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CreateProjectDto} from "../../../../services/project/models/CreateProjectDto.ts";
import projectService from "../../../../services/project/ProjectService.ts";
import {projectQueryKeys} from "../../../../services/project/projectQueryKeys.ts";

export const useCreateProject = () => {

    const queryClient = useQueryClient();
    // const { toastError, toastSuccess } = useNotification();

    return useMutation(
        {
            mutationFn: (data: CreateProjectDto) => projectService.createProject(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: projectQueryKeys.projects() });
            }
        })
}