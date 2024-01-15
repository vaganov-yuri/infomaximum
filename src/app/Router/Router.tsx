import { createBrowserRouter } from 'react-router-dom'
import { routeConfig } from './routerConfig'
import { renderWithWrapper } from './renderWithWrapper'
import { LayoutDefault } from '@/app/Layout'
import { NotFound } from '@/pages/NotFound'

export const router = createBrowserRouter([
    {
        path: routeConfig.main.path,
        element: <LayoutDefault />,
        errorElement: <NotFound />,
        children: Object.values(routeConfig).map(renderWithWrapper),
    },
])
