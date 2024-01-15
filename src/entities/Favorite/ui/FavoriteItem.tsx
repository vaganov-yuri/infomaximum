import { type FC, memo, type NamedExoticComponent } from 'react'
import { type ICar } from '@/entities/Car'
import { css, useTheme } from '@emotion/react'
import { UiFlex } from '@/shared/ui/UiFlex'
import { UiText } from '@/shared/ui/UiText'
import { UiButton } from '@/shared/ui/UiButton'

interface IProps {
    data: ICar
    ButtonFavorite: FC<{ id: number }>
}
const FavoriteItem: NamedExoticComponent<IProps> = memo(
    ({ data, ButtonFavorite }) => {
        const theme = useTheme()
        return (
            <UiFlex
                align={'stretch'}
                gap={20}
                css={css`
                    padding-bottom: 24px;
                    border-bottom: 1px solid ${theme.colors.gray['2']};
                `}
            >
                <div
                    css={(theme) => css`
                        height: 100%;
                        border-radius: 12px;
                        border: 1px solid ${theme.colors.gray['2']};
                        overflow: hidden;
                        position: relative;
                    `}
                >
                    <img
                        src={import.meta.env.VITE_API + data.img_src}
                        alt={`${data.brand} ${data.model}`}
                        width={443}
                        height={308}
                    />
                </div>
                <UiFlex
                    directions={'column'}
                    css={css`
                        max-width: 810px;
                    `}
                >
                    <UiFlex gap={16} directions={'column'}>
                        <UiText tag={'h2'}>
                            {data.brand} {data.model}
                        </UiText>
                        <UiText
                            tag={'p'}
                            color={theme.colors.gray['3']}
                            css={css`
                                overflow: hidden;
                                display: -webkit-box;
                                -webkit-line-clamp: 3;
                                -webkit-box-orient: vertical;
                                height: 48px;
                            `}
                        >
                            {data.description}
                        </UiText>
                        <UiText tag={'p'} color={theme.colors.gray['3']}>
                            Год: {data.model_year}
                        </UiText>
                        <UiText tag={'p'} color={theme.colors.gray['3']}>
                            Цвет: {data.color}
                        </UiText>
                    </UiFlex>
                    <UiText
                        tag={'h3'}
                        css={css`
                            margin-top: 33px;
                        `}
                    >
                        от {data.price}
                    </UiText>
                    <UiFlex
                        align={'center'}
                        gap={20}
                        css={css`
                            margin-top: auto;
                        `}
                    >
                        <UiButton maxWidth={'259px'}>
                            Выбрать комплектацию
                        </UiButton>
                        <ButtonFavorite id={data.id} />
                    </UiFlex>
                </UiFlex>
            </UiFlex>
        )
    }
)
FavoriteItem.displayName = 'FavoriteItem'
export { FavoriteItem }
