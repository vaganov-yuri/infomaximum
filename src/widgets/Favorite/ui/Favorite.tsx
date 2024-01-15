import { Loader } from '@/shared/ui/Loader'
import { useGetCarsQuery } from '@/entities/Car'
import { FavoriteItem, getFavoriteCars } from '@/entities/Favorite'
import { useAppSelector } from '@/shared/lib/store/hooks'
import { type ReactElement } from 'react'
import { UiText } from '@/shared/ui/UiText'
import { css } from '@emotion/react'
import { UiFlex } from '@/shared/ui/UiFlex'
import { ButtonFavoriteTresh } from '@/features/ButtonFavorite'
import { plural } from '../lib/plural'

export const Favorite = (): ReactElement => {
    const { data, isLoading, error } = useGetCarsQuery()
    const favorite = useAppSelector(getFavoriteCars)

    if (error) {
        console.log(error)
        return (
            <UiFlex
                align={'center'}
                justify={'center'}
                css={css`
                    width: 100dvw;
                    height: 80dvh;
                `}
            >
                ошибка
            </UiFlex>
        )
    }
    if (isLoading || !data) {
        return <Loader />
    }
    if (data.length === 0 || favorite.length === 0) {
        return (
            <UiFlex
                align={'center'}
                justify={'center'}
                css={css`
                    width: 100dvw;
                    height: 80dvh;
                `}
            >
                <UiText tag={'h1'}>Список избранного пуст</UiText>
            </UiFlex>
        )
    }

    const favoriteData = data.filter((item) => favorite.includes(item.id))
    const favoritePosition = plural(favoriteData.length)

    return (
        <section
            css={css`
                padding: 46px 40px 130px;
            `}
        >
            <UiText
                tag={'h1'}
                css={(theme) => css`
                    padding-bottom: 26px;
                    border-bottom: 1px solid ${theme.colors.gray['2']};
                `}
            >
                {favoritePosition}
            </UiText>
            <UiFlex
                css={css`
                    margin-top: 64px;
                `}
                gap={36}
                directions={'column'}
            >
                {favoriteData.map((item) => (
                    <FavoriteItem
                        key={item.id}
                        data={item}
                        ButtonFavorite={ButtonFavoriteTresh}
                    />
                ))}
            </UiFlex>
        </section>
    )
}
