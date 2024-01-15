import { type ICarSortField, type ICarSortOrder } from './car'

export interface ICarsListSchema {
    order: ICarSortOrder
    sort: ICarSortField
    search: string
    searchParams?: string
}
