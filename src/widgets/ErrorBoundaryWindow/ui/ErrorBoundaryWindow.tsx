import { type ReactElement } from 'react'
import { css } from '@emotion/react'
import { UiFlex } from '@/shared/ui/UiFlex'
import { UiButton } from '@/shared/ui/UiButton'

export const ErrorBoundaryWindow = (): ReactElement => {
    const reloadPage = (): void => {
        location.reload()
    }
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
            <UiButton onClick={reloadPage}>Перезагрузите страницу</UiButton>
        </UiFlex>
    )
}
