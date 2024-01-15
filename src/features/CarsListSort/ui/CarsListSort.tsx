import { type ReactElement, useRef } from 'react'
import { useAppDispatch } from '@/shared/lib/store/hooks'
import { carsListActions } from '@/entities/Car'
import { UiFlex } from '@/shared/ui/UiFlex'
import { UiButton } from '@/shared/ui/UiButton'
import { css } from '@emotion/react'
import searchIcon from '@/shared/img/search.svg'
import { BlockSelectSort } from './BlockSelectSort'

export const CarsListSort = (): ReactElement => {
    const dispatch = useAppDispatch()
    const inputRef = useRef<HTMLInputElement>(null)

    const onSearch = (): void => {
        dispatch(carsListActions.setSearch(inputRef.current?.value ?? ''))
    }

    return (
        <UiFlex align={'center'} justify={'space-between'}>
            <BlockSelectSort />
            <UiFlex
                as={'label'}
                align={'center'}
                gap={5}
                css={(theme) => css`
                    width: 431px;
                    padding: 4px 4px 4px 10px;
                    border: 1px solid ${theme.colors.gray['2']};
                    overflow: hidden;
                    border-radius: 5px;
                `}
            >
                <input
                    ref={inputRef}
                    type="text"
                    name="search"
                    placeholder={'Найти авто'}
                    css={(theme) => css`
                        width: 100%;
                        overflow: hidden;
                        color: ${theme.colors.gray['2']};
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-family: Inter, sans-serif;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        outline: none;
                        &::placeholder {
                            color: ${theme.colors.gray['2']};
                        }
                    `}
                />
                <UiButton onClick={onSearch} iconOnly size={'tiny'}>
                    <img
                        src={searchIcon}
                        alt={'search'}
                        width={12}
                        height={12}
                    />
                </UiButton>
            </UiFlex>
        </UiFlex>
    )
}
