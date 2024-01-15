import { css, type Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { type ReactNode } from 'react'
import { type Interpolation } from '@emotion/serialize'

interface IProps {
    size?: 'small' | 'medium' | 'default' | 'tiny'
    iconOnly?: boolean
    maxWidth?: string | false
    variant?: 'default' | 'ghost' | 'destructive'
    children?: ReactNode
    css?: Interpolation<Theme>
}
interface ButtonProps {
    onClick?: () => void
    href?: false
    disabled?: boolean
}

interface LinkProps {
    href: string
    'aria-disabled'?: boolean
}

type TElement = ButtonProps | LinkProps
export const UiButton = styled(({ href, ...props }: TElement & IProps) =>
    href ? <Link {...props} to={href} /> : <button {...props} />
)<IProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    appearance: none;
    transition: color 300ms, background-color 300ms;
    border-radius: 5px;
    gap: 10px;
    box-sizing: border-box;
    ${({ size, maxWidth, iconOnly }) => {
        switch (size) {
            case 'tiny':
                return css`
                    ${iconOnly
                        ? 'width: 24px; height: 24px;'
                        : 'padding: 5px 10px'};
                `
            case 'small':
                return css`
                    height: 36px;
                    width: ${iconOnly ? '36px' : maxWidth ?? '135px'};
                `
            case 'medium':
                return css`
                    height: 60px;
                    width: ${iconOnly ? '60px' : maxWidth ?? '207px'};
                `
            default:
                return css`
                    height: 56px;
                    width: ${iconOnly ? '56px' : maxWidth ?? '254px'};
                `
        }
    }}
    ${({ variant, theme }) => {
        const baseStyleVariant = css`
            &:disabled,
            &[disabled],
            &[aria-disabled='true'] {
                pointer-events: none;
                border: none;
                background-color: ${theme.colors.gray['2']};
                color: ${theme.colors.dark};
            }
        `
        switch (variant) {
            case 'ghost':
                return css`
                    background-color: transparent;
                    color: ${theme.colors.gray['4']};
                    border: none;
                    &:hover {
                        color: ${theme.colors.gray['3']};
                    }
                    &:active {
                        color: ${theme.colors.gray['4']};
                    }
                `
            case 'destructive':
                return css`
                    background-color: ${theme.colors.gray['0']};
                    color: ${theme.colors.red['1']};
                    border: 2px solid ${theme.colors.red['1']};
                    &:hover {
                        border: none;
                        background-color: ${theme.colors.red['1']};
                        color: ${theme.colors.gray['0']};
                    }
                    &:active {
                        border: none;
                        background-color: ${theme.colors.red['2']};
                        color: ${theme.colors.gray['0']};
                    }
                    ${baseStyleVariant}
                `
            default:
                return css`
                    background-color: ${theme.colors.blue['2']};
                    color: ${theme.colors.white};
                    &:hover {
                        background-color: ${theme.colors.blue['3']};
                    }
                    &:active {
                        background-color: ${theme.colors.blue['4']};
                    }
                    ${baseStyleVariant}
                `
        }
    }}
`
