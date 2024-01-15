import { type FC, memo, type NamedExoticComponent } from 'react'
import { type ICar } from '../model/types/car'
import { UiButton } from '@/shared/ui/UiButton'
import { UiText } from '@/shared/ui/UiText'
import { css } from '@emotion/react'
import { UiFlex } from '@/shared/ui/UiFlex'

interface IProps {
    data: ICar
    ButtonFavorite: FC<{ id: number; availability: boolean }>
}
const CarsListItem: NamedExoticComponent<IProps> = memo(
    ({ data, ButtonFavorite }) => {
        return (
            <div>
                <div
                    css={(theme) => css`
                        width: 100%;
                        height: 310px;
                        border-radius: 15px 15px 0 0;
                        border: 1px solid ${theme.colors.gray['2']};
                        overflow: hidden;
                        position: relative;
                    `}
                >
                    {!data.availability && (
                        <UiText
                            tag={'span'}
                            styleTag={'h4'}
                            css={(theme) => css`
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                padding: 15px 33px 16px 34px;
                                background-color: ${theme.colors.gray['4']};
                                color: ${theme.colors.gray['0']};
                                border-radius: 15px;
                                z-index: 1;
                            `}
                        >
                            Нет в наличии
                        </UiText>
                    )}
                    <img
                        src={import.meta.env.VITE_API + data.img_src}
                        alt={`${data.brand} ${data.model}`}
                        width={444}
                        height={310}
                        css={css`
                            margin: 0 auto;
                            display: block;
                            &[aria-disabled='true'] {
                                pointer-events: none;
                                opacity: 0.3;
                            }
                        `}
                        aria-disabled={!data.availability}
                    />
                </div>
                <UiText
                    tag={'h3'}
                    css={css`
                        margin-top: 26px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    `}
                >
                    {data.brand} {data.model}
                </UiText>
                <UiText
                    tag={'p'}
                    css={(theme) => css`
                        margin-top: 12px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: ${theme.colors.gray['3']};
                    `}
                >
                    {data.model_year} {data.color}
                </UiText>
                <UiText
                    tag={'p'}
                    styleTag={'h4'}
                    css={css`
                        margin-top: 12px;
                    `}
                >
                    от {data.price}
                </UiText>
                <UiFlex
                    align={'center'}
                    gap={25}
                    css={css`
                        margin-top: 20px;
                    `}
                >
                    <UiButton disabled={!data.availability}>Купить</UiButton>
                    <ButtonFavorite
                        id={data.id}
                        availability={data.availability}
                    />
                </UiFlex>
            </div>
        )
    }
)
CarsListItem.displayName = 'CarsListItem'
export { CarsListItem }
