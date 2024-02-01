import {instanceBackend} from "../../api/instances.ts";
import {ProjectsDto} from "./models/ProjectsDto.ts";
import {CreateProjectDto} from "./models/CreateProjectDto.ts";
import {ProjectDetailsDto} from "./models/ProjectDetailsDto.ts";

class ProjectService {
    async getProjects() {
        return instanceBackend.get<ProjectsDto>('project')
    }

    async getProjectDetails(id: string) {
        return instanceBackend.get<ProjectDetailsDto>(`project/${id}`)
    }

    async createProject(data: CreateProjectDto) {
        return instanceBackend.post<{ID: string}>('project', data)
    }
}

const projectService = new ProjectService();

export default projectService;