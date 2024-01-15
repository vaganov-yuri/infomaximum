import { type ICar, type ISortParams } from '../model/types/car'

export const sortCars = (
    cars: ICar[],
    { order, sort, search }: ISortParams
): ICar[] => {
    let sortedCars = [...cars]

    if (search) {
        sortedCars = sortedCars.filter((car) =>
            `${car.brand} ${car.model}`
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    }

    switch (sort) {
        case 'stock':
            sortedCars.sort((a, b) =>
                a.availability === b.availability ? 0 : a.availability ? -1 : 1
            )
            break
        case 'new':
            sortedCars.sort((a, b) => b.model_year - a.model_year)
            break
        case 'title':
            sortedCars.sort((a, b) => a.brand.localeCompare(b.brand))
            break
        case 'price':
            sortedCars.sort(
                (a, b) =>
                    +a.price.replace(/[^\d]/g, '') -
                    +b.price.replace(/[^\d]/g, '')
            )
            break
    }

    if (order === 'desc') {
        sortedCars.reverse()
    }

    return sortedCars
}
