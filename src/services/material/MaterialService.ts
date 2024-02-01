import {instanceBackend} from "../../api/instances.ts";
import {MineralsDto} from "./models/MineralsDto.ts";
import {CreateMineral} from "./models/CreateMineral.ts";
import {EditMineral} from "./models/EditMineral.ts";

class MaterialService {
    async getMinerals() {
        return instanceBackend.get<MineralsDto>(`material/mineral`)
    }

    async addMineral(data: CreateMineral) {
        return instanceBackend.post('material/mineral', data)
    }

    async editMineral(id: string, data: EditMineral) {
        return instanceBackend.put(`material/mineral/${id}`, data)
    }

    async deleteMineral(id: string) {
        return instanceBackend.delete(`material/mineral/${id}`)
    }
}

const materialService = new MaterialService();

export default materialService;