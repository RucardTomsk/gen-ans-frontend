
export interface ProjectDetailsDto {
    project: {
        created_at: string,
        description: string,
        id: string,
        name: string,
        photos: [
            {
                bucket: string,
                created_at: string,
                description: string,
                id: string,
                key: string,
                name: string,
                update_at: string,
                url: string
            }
        ],
        updated_at: string
    },
}