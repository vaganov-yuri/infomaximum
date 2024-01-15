import { EAppRoutes, type IRoutePath } from './types'

export const RoutePath: Pick<IRoutePath, EAppRoutes> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.FAVORITES]: '/favorites',
    [EAppRoutes.CATALOG]: '/catalog',
    [EAppRoutes.NOT_FOUND]: '*',
}
