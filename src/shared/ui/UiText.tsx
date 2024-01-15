import styled from '@emotion/styled'
import { css, type Theme } from '@emotion/react'
import type { ReactNode } from 'react'
import { type Interpolation } from '@emotion/serialize'
interface IProps {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
    styleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
    color?: string
    children?: ReactNode
    css?: Interpolation<Theme>
}
export const UiText = styled(({ tag, ...props }: IProps) => {
    const Tag = tag ?? 'span'
    return <Tag {...props} />
})<IProps>`
    font-family: Inter, sans-serif;
    font-style: normal;
    color: ${({ theme, color }) => color ?? theme.colors.dark};
    ${({ tag, styleTag = tag }) => {
        switch (styleTag) {
            case 'h1':
                return css`
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 120.833%;
                `
            case 'h2':
                return css`
                    font-size: 36px;
                    font-weight: 700;
                    line-height: 116.667%;
                `
            case 'h3':
                return css`
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 116.667%;
                `
            case 'h4':
                return css`
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 112.5%;
                `
            default:
                return css`
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 114.286%;
                `
        }
    }}
`
