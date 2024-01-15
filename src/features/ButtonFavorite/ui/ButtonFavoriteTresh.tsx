import { css } from '@emotion/react'
import { TreshIcon } from '@/shared/icon/TreshIcon'
import { UiButton } from '@/shared/ui/UiButton'
import type { FC } from 'react'
import { useFavorite } from '../hooks/useFavorite'

interface IProps {
    id: number
}
export const ButtonFavoriteTresh: FC<IProps> = ({ id }) => {
    const { toggleFavorite } = useFavorite(id)
    return (
        <UiButton
            iconOnly
            variant={'destructive'}
            onClick={toggleFavorite}
            css={(theme) => css`
                path {
                    fill: ${theme.colors.red['1']};
                    transition: fill 300ms;
                }
                &:hover path {
                    fill: ${theme.colors.gray['0']};
                }
            `}
        >
            <TreshIcon />
        </UiButton>
    )
}
