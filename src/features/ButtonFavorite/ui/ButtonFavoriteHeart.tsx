import { css } from '@emotion/react'
import heartFullHover from '@/shared/img/heart-full-hover.svg'
import heartHollow from '@/shared/img/heart-hollow.svg'
import heartFullActive from '@/shared/img/heart-full-active.svg'
import heartHollowDisable from '@/shared/img/heart-hollow-disable.svg'
import { UiButton } from '@/shared/ui/UiButton'
import { type FC } from 'react'
import { useFavorite } from '../hooks/useFavorite'

interface IProps {
    id: number
    availability: boolean
}
export const ButtonFavoriteHeart: FC<IProps> = ({ id, availability }) => {
    const { toggleFavorite, isFavorite } = useFavorite(id)
    return (
        <UiButton
            iconOnly
            size={'tiny'}
            variant={'ghost'}
            onClick={toggleFavorite}
            disabled={!availability}
            css={css`
                position: relative;
                background-size: 100%;
                background-repeat: no-repeat;
                background-position: left;
                background-image: url(${heartHollow});
                &:before,
                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: left;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 200ms;
                }
                &:before {
                    background-image: url(${heartFullHover});
                    z-index: 1;
                }
                &:after {
                    background-image: url(${heartFullActive});
                    z-index: 2;
                }
                &:hover:before {
                    opacity: 1;
                }
                ${isFavorite &&
                css`
                    &:after {
                        opacity: 1;
                    }
                `}
                &:disabled,
                &[disabled],
                &[aria-disabled='true'] {
                    background-image: url(${heartHollowDisable});
                    pointer-events: none;
                    cursor: default;
                    &:before {
                        display: none;
                    }
                }
            `}
        />
    )
}
