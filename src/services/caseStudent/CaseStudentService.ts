import {instanceBackend} from "../../api/instances.ts";
import {CaseDto} from "./models/CaseDto.ts";
import {CaseNavigationDto} from "./models/CaseNavigationDto.ts";

class CaseStudentService {

    async getCase(id: string) {
        return instanceBackend.get<CaseDto>(`case/${id}`)
    }

    async getCaseTimer(id: string) {
        return instanceBackend.get<CaseDto>(`case/${id}/timer`)
    }

    async getCaseNavigation(boId: string) {
        return instanceBackend.get<CaseNavigationDto>(`case/business-opportunity/${boId}`)
    }

}

const caseStudentService = new CaseStudentService();

export default caseStudentService;