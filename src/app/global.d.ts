import { type THEME_STYLES } from '@/app/styles/theme.styles'
declare module '@emotion/react' {
    export interface Theme {
        colors: typeof THEME_STYLES.colors
    }
}
