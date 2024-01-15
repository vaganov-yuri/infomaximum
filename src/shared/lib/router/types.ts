export enum EAppRoutes {
    MAIN = 'main',
    FAVORITES = 'favorites',
    CATALOG = 'catalog',
    NOT_FOUND = 'not_found',
}

export interface IRoutePath {
    [EAppRoutes.MAIN]: string
    [EAppRoutes.FAVORITES]: string
    [EAppRoutes.CATALOG]: string
    [EAppRoutes.NOT_FOUND]: string
}
