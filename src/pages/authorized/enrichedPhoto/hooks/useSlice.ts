import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import segmentationService from "../../../../services/segmentation/SegmentationService.ts";
import {useParams} from "react-router-dom";
import {segmentationQueryKeys} from "../../../../services/segmentation/segmentationQueryKeys.ts";
import {CreateSegmentDto} from "../../../../services/segmentation/models/CreateSegmentDto.ts";
import {materialQueryKeys} from "../../../../services/material/materialQueryKeys.ts";
import materialService from "../../../../services/material/MaterialService.ts";
import {CreateMineral} from "../../../../services/material/models/CreateMineral.ts";
import {EditMineral} from "../../../../services/material/models/EditMineral.ts";

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

    const createMineral = useMutation(
        {
            mutationFn: (data: CreateMineral) => materialService.addMineral(data),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: materialQueryKeys.minerals()});
            }
        })

    const editMineral = useMutation(
        {
            mutationFn: (data: {mineralId: string, data: EditMineral}) => materialService.editMineral(data.mineralId, data.data),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: materialQueryKeys.minerals()});
                queryClient.invalidateQueries({queryKey: segmentationQueryKeys.photo(id || "")});
            }
        })

    const deleteMineral = useMutation(
        {
            mutationFn: (id: string) => materialService.deleteMineral(id),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: materialQueryKeys.minerals()});
                queryClient.invalidateQueries({queryKey: segmentationQueryKeys.photo(id || "")});
            }
        })

    return {
        getData,
        getMinerals,
        createSegment,
        deleteSegment,
        createMineral,
        editMineral,
        deleteMineral
    }
}