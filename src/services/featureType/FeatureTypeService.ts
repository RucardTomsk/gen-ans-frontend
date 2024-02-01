import {instanceBackend} from "../../api/instances.ts";
import {FeatureTypeCollection} from "./models/FeatureTypeCollection.ts";

class FeatureTypeService {
    async getStudentFeatureTypes(mapId: string) {
        return instanceBackend.get<FeatureTypeCollection>(`feature-type/map/${mapId}/student`)
    }
}

const featureTypeService = new FeatureTypeService();
export default featureTypeService