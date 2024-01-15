import { type ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderDefault } from '@/widgets/Header'
import { css } from '@emotion/react'
import { UiFlex } from '@/shared/ui/UiFlex'

export const LayoutDefault = (): ReactElement => {
    return (
        <UiFlex
            directions={'column'}
            css={css`
                min-height: 100dvh;
            `}
        >
            <HeaderDefault />
            <main>
                <Outlet />
            </main>
        </UiFlex>
    )
}
