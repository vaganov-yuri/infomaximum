import styled from '@emotion/styled'
import { css, type SerializedStyles } from '@emotion/react'
import { type HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLDivElement> {
    gap?: number
    justify?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
    align?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'baseline'
        | 'stretch'
    directions?: 'row' | 'column'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}
export const UiFlex = styled.div<IProps>`
    display: flex;
    ${(props) => {
        const { 
            gap, 
            justify, 
            align, 
            directions, 
            wrap 
        } = props

        const classStyles: SerializedStyles[] = []
        gap &&
            classStyles.push(css`
                gap: ${gap}px;
            `)
        justify &&
            classStyles.push(css`
                justify-content: ${justify};
            `)
        align &&
            classStyles.push(css`
                align-items: ${align};
            `)
        directions &&
            classStyles.push(css`
                flex-direction: ${directions};
            `)
        wrap &&
            classStyles.push(css`
                flex-wrap: ${wrap};
            `)
        return classStyles
    }}
`
