import { type ReactElement } from 'react'
import { css } from '@emotion/react'
import { UiFlex } from '@/shared/ui/UiFlex'
import { UiText } from '@/shared/ui/UiText'

export const Loader = (): ReactElement => {
    return (
        <UiFlex
            as={'section'}
            justify={'center'}
            align={'center'}
            css={css`
                width: 100dvw;
                height: 80dvh;
            `}
        >
            <UiText tag={'h1'}>Loading...</UiText>
        </UiFlex>
    )
}
