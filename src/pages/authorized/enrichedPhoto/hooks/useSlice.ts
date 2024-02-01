import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import segmentationService from "../../../../services/segmentation/SegmentationService.ts";
import {useParams} from "react-router-dom";
import {segmentationQueryKeys} from "../../../../services/segmentation/segmentationQueryKeys.ts";
import {CreateSegmentDto} from "../../../../services/segmentation/models/CreateSegmentDto.ts";
import {materialQueryKeys} from "../../../../services/material/materialQueryKeys.ts";
import materialService from "../../../../services/material/MaterialService.ts";

export function useSlice() {

    const {id} = useParams();
    const queryClient = useQueryClient();

    const getData =  useQuery({
        queryKey: segmentationQueryKeys.photo(id || ""),
        queryFn: () => segmentationService.getEnrichedPhoto(id || ""),
        select: ({data}) => data,
        enabled: !!id
    })

    const getMinerals =  useQuery({
        queryKey: materialQueryKeys.minerals(),
        queryFn: () => materialService.getMinerals(),
        select: ({data}) => data
    })

    const createSegment = useMutation(
        {
            mutationFn: (data: {mineralId: string, data: CreateSegmentDto}) => segmentationService.createSegment(id || "" , data.mineralId, data.data),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: segmentationQueryKeys.photo(id || "")});
            }
        })

    const deleteSegment = useMutation(
        {
            mutationFn: (id: string) => segmentationService.deleteSegment(id),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: segmentationQueryKeys.photo(id || "")});
            }
        })

    return {
        getData,
        getMinerals,
        createSegment,
        deleteSegment
    }
}