import {instanceBackend} from "../../api/instances.ts";
import {MineralsDto} from "./models/MineralsDto.ts";

class MaterialService {
    async getMinerals() {
        return instanceBackend.get<MineralsDto>(`material/mineral`)
    }

}

const materialService = new MaterialService();

export default materialService;