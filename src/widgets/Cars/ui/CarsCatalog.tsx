import { CatalogList } from '@/shared/ui/CatalogList'
import {
    CarsListItem,
    getCarsListOrder,
    getCarsListSearch,
    getCarsListSort,
    type ICar,
    sortCars,
} from '@/entities/Car'
import { useAppSelector } from '@/shared/lib/store/hooks'
import { type FC } from 'react'
import { css } from '@emotion/react'
import { ButtonFavoriteHeart } from '@/features/ButtonFavorite'
interface IProps {
    items: ICar[]
}
export const CarsCatalog: FC<IProps> = ({ items }) => {
    const order = useAppSelector(getCarsListOrder)
    const sort = useAppSelector(getCarsListSort)
    const search = useAppSelector(getCarsListSearch)

    const sortItems = sortCars(items, { order, sort, search })
    return (
        <CatalogList
            css={css`
                margin-top: 42px;
            `}
        >
            {sortItems.map((item) => (
                <CarsListItem
                    key={item.id}
                    data={item}
                    ButtonFavorite={ButtonFavoriteHeart}
                />
            ))}
        </CatalogList>
    )
}
