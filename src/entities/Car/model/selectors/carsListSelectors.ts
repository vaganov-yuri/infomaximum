import { type IStateSchema } from '@/shared/lib/store/types'
import { ICarSortField, ICarSortOrder } from '../types/car'

export const getCarsListOrder = (state: IStateSchema): ICarSortOrder =>
    state.carsList?.order ?? ICarSortOrder.ASC
export const getCarsListSort = (state: IStateSchema): ICarSortField =>
    state.carsList?.sort ?? ICarSortField.STOCK
export const getCarsListSearch = (state: IStateSchema): string =>
    state.carsList?.search ?? ''
export const getCarsListParams = (state: IStateSchema): string | undefined =>
    state.carsList?.searchParams
