import {instanceBackend} from "../../api/instances.ts";
import {ProjectsDto} from "../project/models/ProjectsDto.ts";

class SegmentationService {
    async getEnrichedPhoto(id: string) {
        return instanceBackend.get<ProjectsDto>(`segmentation/photo/${id}`)
    }

    async deleteEnrichedPhoto(id: string) {
        return instanceBackend.delete(`segmentation/photo/${id}`)
    }

    async addEnrichedPhoto(id: string, data: FormData) {
        return instanceBackend.post(`segmentation/${id}`, data)
    }
}

const segmentationService = new SegmentationService();

export default segmentationService;