import { Global, ThemeProvider } from '@emotion/react'
import { GLOBAL_STYLES } from './styles/global.styles'
import { type ReactElement } from 'react'
import { ErrorBoundary } from './providers/ErrorBoundary'
import { StoreProvider } from './providers/StoreProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import { THEME_STYLES } from './styles/theme.styles'

export const App = (): ReactElement => {
    return (
        <ThemeProvider theme={THEME_STYLES}>
            <ErrorBoundary>
                <StoreProvider>
                    <RouterProvider router={router} />
                </StoreProvider>
            </ErrorBoundary>
            <Global styles={GLOBAL_STYLES} />
        </ThemeProvider>
    )
}
