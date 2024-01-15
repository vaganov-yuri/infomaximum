import { type ReactElement } from 'react'
import { css } from '@emotion/react'
import { UiFlex } from '@/shared/ui/UiFlex'

const NotFound = (): ReactElement => {
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
            NotFound
        </UiFlex>
    )
}

export default NotFound
