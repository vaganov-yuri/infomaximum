import { RoutePath } from '@/shared/lib/router/RoutePath'
import logo from '@/shared/img/logo.svg'
import { type ReactElement } from 'react'
import { UiButton } from '@/shared/ui/UiButton'
import { UiText } from '@/shared/ui/UiText'
import { css } from '@emotion/react'
import { UiFlex } from '@/shared/ui/UiFlex'
import favorite from '@/shared/img/heart-full-hover.svg'
import { Link } from 'react-router-dom'

export const HeaderDefault = (): ReactElement => {
    return (
        <UiFlex
            as={'header'}
            align={'center'}
            css={(theme) => css`
                padding: 17px 40px;
                border-bottom: 1px solid ${theme.colors.gray['2']};
            `}
        >
            <UiFlex
                align={'center'}
                gap={21}
                css={css`
                    margin-right: auto;
                `}
            >
                <Link to={RoutePath.main}>
                    <img src={logo} alt="Логотип КупиАвто" />
                </Link>
                <UiButton href={RoutePath.catalog} size={'small'}>
                    Каталог
                </UiButton>
            </UiFlex>
            <UiFlex
                gap={31}
                css={css`
                    margin-right: 136px;
                `}
            >
                <UiText styleTag={'h4'}>
                    Москва, Волгоградский пр-кт, 43, стр 1
                </UiText>
                <UiText styleTag={'h4'}>
                    <a href={'tel:+78005553535'}>+7 800 555 35 35</a>
                </UiText>
            </UiFlex>
            <UiButton
                href={RoutePath.favorites}
                variant={'ghost'}
                size={'tiny'}
            >
                <img src={favorite} alt="favorite" height={24} width={24} />{' '}
                Избранное
            </UiButton>
        </UiFlex>
    )
}
