import { lazy } from 'react'

export const LazyCatalogPage = lazy(async () => await import('./CatalogPage'))
