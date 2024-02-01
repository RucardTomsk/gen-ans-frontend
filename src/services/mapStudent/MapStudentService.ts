import {instanceBackend} from "../../api/instances.ts";
import {MapDto} from "./models/MapDto.ts";
import {MapFeatureCreateDto} from "./models/MapFeatureCreateDto.ts";
import {MapFeatureEdtDto} from "./models/MapFeatureEditDto.ts";

class MapStudentService {
    async getMap(caseId: string) {
        return instanceBackend.get<MapDto>(`map/case/${caseId}/student`)
    }

    async addMapFeature(mapId: string, data: MapFeatureCreateDto) {
        return instanceBackend.post(`map/${mapId}/map-feature/student`, data)
    }

    async editMapFeature(id: string, data: MapFeatureEdtDto) {
        return instanceBackend.put(`map/map-feature/${id}/student`, data)
    }

    async deleteMapFeature(id: string) {
        return instanceBackend.delete(`map/map-feature/${id}/student`)
    }

}

const mapStudentService = new MapStudentService();

export default mapStudentService;