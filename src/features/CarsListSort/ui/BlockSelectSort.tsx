import { css } from '@emotion/react'
import sortIcon from '@/shared/img/sort.svg'
import { Droprown } from '@/shared/ui/Dropdown'
import { UiFlex } from '@/shared/ui/UiFlex'
import { UiText } from '@/shared/ui/UiText'
import {
    useRef,
    useState,
    type MouseEvent,
    useCallback,
    type ReactElement,
} from 'react'
import { carsListActions, ICarSortField, ICarSortOrder } from '@/entities/Car'
import { useAppDispatch } from '@/shared/lib/store/hooks'

const selectList = [
    {
        key: 'Сначала в наличии',
        sort: ICarSortField.STOCK,
        order: ICarSortOrder.ASC,
    },
    {
        key: 'Сначала новые',
        sort: ICarSortField.NEW,
        order: ICarSortOrder.ASC,
    },
    {
        key: 'Сначала дешевые',
        sort: ICarSortField.PRICE,
        order: ICarSortOrder.ASC,
    },
    {
        key: 'Сначала дороже',
        sort: ICarSortField.PRICE,
        order: ICarSortOrder.DESC,
    },
    {
        key: 'По имени (A-Z)',
        sort: ICarSortField.TITLE,
        order: ICarSortOrder.ASC,
    },
    {
        key: 'По имени (Z-A)',
        sort: ICarSortField.TITLE,
        order: ICarSortOrder.DESC,
    },
    {
        key: 'Сначала старше',
        sort: ICarSortField.NEW,
        order: ICarSortOrder.DESC,
    },
]
export const BlockSelectSort = (): ReactElement => {
    const dropownRef = useRef<HTMLButtonElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [buttonTitle, setButtonTitle] = useState('Сначала в наличии')

    const dispatch = useAppDispatch()
    const onClickItemSort = useCallback(
        (sort: ICarSortField, order: ICarSortOrder, title: string) => () => {
            dispatch(carsListActions.setSort(sort))
            dispatch(carsListActions.setOrder(order))
            setIsOpen(false)
            setButtonTitle(title)
        },
        []
    )
    const onClickSortButton = (e: MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }
    return (
        <>
            <button
                ref={dropownRef}
                onClick={onClickSortButton}
                css={(theme) => css`
                    position: relative;
                    width: 204px;
                    background-color: ${theme.colors.gray['0']};
                    margin-left: 26px;
                    &:before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: -26px;
                        transform: translateY(-50%);
                        width: 15px;
                        height: 16px;
                        background-image: url(${sortIcon});
                        background-size: 100%;
                        background-repeat: no-repeat;
                        background-position: left;
                    }
                `}
            >
                {buttonTitle}
            </button>
            <Droprown
                shown={isOpen}
                onShownChange={setIsOpen}
                targetRef={dropownRef}
            >
                <UiFlex
                    directions={'column'}
                    css={(theme) => css`
                        background-color: ${theme.colors.gray['0']};
                        border: 1px solid ${theme.colors.gray['4']};
                    `}
                >
                    {selectList.map(({ key, sort, order }) => (
                        <button
                            key={sort}
                            onClick={onClickItemSort(sort, order, key)}
                        >
                            <UiText
                                tag={'p'}
                                css={css`
                                    padding: 3px 4px;
                                    &:hover {
                                        color: white;
                                        background-color: #1e8fff;
                                    }
                                `}
                            >
                                {key}
                            </UiText>
                        </button>
                    ))}
                </UiFlex>
            </Droprown>
        </>
    )
}
