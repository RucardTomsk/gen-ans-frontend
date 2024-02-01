
export const projectQueryKeys = {
    projects: () => ["GET_PROJECTS"],
    project: (id: string) => ["GET_PROJECT", id]
}