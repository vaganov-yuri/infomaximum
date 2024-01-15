import type { ReactNode } from 'react'
import styled from '@emotion/styled'
interface IProps {
    children: ReactNode
}
export const CatalogList = styled.div<IProps>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(445px, 1fr));
    grid-gap: 73px 20px;
`
