import { lazy } from 'react'

export const LazyFavoritePage = lazy(async () => await import('./FavoritePage'))
