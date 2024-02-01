import {instanceBackend} from "../../api/instances.ts";
import {EditEnrichedPhotoDto} from "./models/EditEnrichedPhotoDto.ts";
import {EnrichedPhotoDto} from "./models/EnrichedPhotoDto.ts";
import {CreateSegmentDto} from "./models/CreateSegmentDto.ts";

class SegmentationService {
    async getEnrichedPhoto(id: string) {
        return instanceBackend.get<EnrichedPhotoDto>(`segmentation/photo/${id}`)
    }

    async deleteEnrichedPhoto(id: string) {
        return instanceBackend.delete(`segmentation/photo/${id}`)
    }

    async editEnrichedPhoto(id: string, data: EditEnrichedPhotoDto) {
        return instanceBackend.put(`segmentation/segment/photo/${id}`, data)
    }

    async addEnrichedPhoto(id: string, data: FormData) {
        return instanceBackend.post(`segmentation/${id}`, data)
    }

    async createSegment(photoId: string, mineralId: string, data: CreateSegmentDto) {
        return instanceBackend.post(`segmentation/segment/photo/${photoId}/mineral/${mineralId}`, data)
    }

    async deleteSegment(id: string) {
        return instanceBackend.delete(`segmentation/segment/${id}`)
    }
}

const segmentationService = new SegmentationService();

export default segmentationService;