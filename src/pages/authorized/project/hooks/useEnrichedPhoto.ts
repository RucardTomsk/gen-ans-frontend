import {useMutation, useQueryClient} from "@tanstack/react-query";
import segmentationService from "../../../../services/segmentation/SegmentationService.ts";
import {useParams} from "react-router-dom";
import {CreateEnrichedPhotoDto} from "../../../../services/segmentation/models/CreateEnrichedPhotoDto.ts";
import {projectQueryKeys} from "../../../../services/project/projectQueryKeys.ts";

export const useEnrichedPhoto = () => {

    const {id: projectId} = useParams();
    const queryClient = useQueryClient();

    const add = useMutation(
        {
            mutationFn: (data: CreateEnrichedPhotoDto) => segmentationService.addEnrichedPhoto(projectId || "", convertFilesToFormData(data)),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: projectQueryKeys.project(projectId || "")});
            }
        })

    const remove= useMutation(
        {
            mutationFn: (id: string) => segmentationService.deleteEnrichedPhoto(id),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: projectQueryKeys.project(projectId || "")});
            }
        })

    return {
        add,
        remove
    }
}

function convertFilesToFormData(data: CreateEnrichedPhotoDto) {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("name", data.name);
    formData.append("description", data.description);
    return formData;
}