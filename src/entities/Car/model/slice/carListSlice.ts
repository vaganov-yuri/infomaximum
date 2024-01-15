import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { ICarSortField, ICarSortOrder } from '../types/car'
import { type ICarsListSchema } from '../types/carsListSchema'

const initialState: ICarsListSchema = {
    order: ICarSortOrder.ASC,
    sort: ICarSortField.STOCK,
    search: '',
}

export const carsListSlice = createSlice({
    name: 'carsListSlice',
    initialState,
    reducers: {
        setSearchParams: (state, action: PayloadAction<string>) => {
            state.searchParams = action.payload
        },
        setOrder: (state, action: PayloadAction<ICarSortOrder>) => {
            state.order = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setSort: (state, action: PayloadAction<ICarSortField>) => {
            state.sort = action.payload
        },
    },
})

export const { actions: carsListActions } = carsListSlice
export const { reducer: carsListReducer } = carsListSlice
