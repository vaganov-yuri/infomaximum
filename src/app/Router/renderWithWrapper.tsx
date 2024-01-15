import { type RouteObject } from 'react-router/dist/lib/context'
import { Suspense } from 'react'
import type { RouteProps } from 'react-router-dom'
import { Loader } from '@/shared/ui/Loader'

export const renderWithWrapper = ({
    element,
    index,
    path,
}: RouteProps): RouteObject => {
    const item = <Suspense fallback={<Loader />}>{element}</Suspense>
    return {
        index,
        path,
        element: item,
    }
}
