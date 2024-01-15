import { lazy } from 'react'

export const LazyNotFound = lazy(async () => await import('./NotFound'))
