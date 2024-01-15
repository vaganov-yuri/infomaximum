export interface ICar {
    availability: boolean
    brand: string
    color: string
    description: string
    id: number
    img_src: string
    model: string
    model_year: number
    price: string
}
export enum ICarSortField {
    STOCK = 'stock',
    NEW = 'new',
    TITLE = 'title',
    PRICE = 'price',
}

export enum ICarSortOrder {
    ASC = 'asc',
    DESC = 'desc',
}

export interface ISortParams {
    order: ICarSortOrder
    sort: ICarSortField
    search: string
}
