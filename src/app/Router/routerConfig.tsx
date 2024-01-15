import { NotFound } from '@/pages/NotFound'
import { EAppRoutes } from '@/shared/lib/router/types'
import { Navigate, type RouteProps } from 'react-router-dom'
import { RoutePath } from '@/shared/lib/router/RoutePath'
import { CatalogPage } from '@/pages/CatalogPage'
import { FavoritePage } from '@/pages/FavoritePage'

export const routeConfig: Record<EAppRoutes, RouteProps> = {
    [EAppRoutes.MAIN]: {
        index: true,
        path: RoutePath.main,
        element: <Navigate to={RoutePath.catalog} />,
    },
    [EAppRoutes.FAVORITES]: {
        path: RoutePath.favorites,
        element: <FavoritePage />,
    },
    [EAppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage />,
    },
    // last
    [EAppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
}
