import {instanceBackend} from "../../api/instances.ts";
import {ProjectsDto} from "./models/ProjectsDto.ts";
import {CreateProjectDto} from "./models/CreateProjectDto.ts";
import {ProjectDetailsDto} from "./models/ProjectDetailsDto.ts";
import {EditProjectDto} from "./models/EditProjectDto.ts";

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

    async editProject(id: string, data: EditProjectDto) {
        return instanceBackend.put(`project/${id}`, data)
    }

    async deleteProject(id: string) {
        return instanceBackend.delete(`project/${id}`)
    }
}

const projectService = new ProjectService();

export default projectService;