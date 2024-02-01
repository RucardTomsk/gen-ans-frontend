
export interface ProjectsDto {
   projects: ProjectDto[]
}

interface ProjectDto {
    created_at: string,
    description: string,
    id: string,
    name: string,
    updated_at: string
}