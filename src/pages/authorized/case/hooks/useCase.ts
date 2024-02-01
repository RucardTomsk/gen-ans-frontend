import {useQuery} from "@tanstack/react-query";
import caseStudentService from "../../../../services/caseStudent/CaseStudentService.ts";
import {caseStudentQueryKeys} from "../../../../services/caseStudent/caseStudentQueryKeys.ts";
import {useParams} from "react-router-dom";

export function useCase() {

    const {caseId} = useParams();

    return useQuery({
        queryKey: caseStudentQueryKeys.case(caseId),
        queryFn: () => caseStudentService.getCase(caseId || ""),
        select: ({data}) => data,
        enabled: !!caseId
    })
}