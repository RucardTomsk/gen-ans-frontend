
export const Links = {
    Unauthorized: {
        Login: '/login',
        Register: '/register'
    },
    Authorized: {
        Projects: '/projects',
        Project: '/project/:id',
        EnrichedPhoto: '/project/:projectId/slice/:id'
    }
}