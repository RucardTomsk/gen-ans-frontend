
export const accountQueryKeys = {
    userProfile: () => ["GET_USER_PROFILE"],
    anotherUserProfile: (id: string) => ["GET_LIST_USERS_SHORT_PROFILE", id],
    listUsersShortProfile: (ids: string[]) => ["GET_ANOTHER_USER_PROFILE", ids]
}