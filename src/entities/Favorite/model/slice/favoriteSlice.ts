import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IFavoriteSchema } from '../types/favoriteSchema'

const initialState: IFavoriteSchema = {
    data: [],
}

export const favoriteSlice = createSlice({
    name: 'favoriteSlice',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<number>) => {
            const objWithIdIndex = state.data.findIndex(
                (id) => id === action.payload
            )
            if (objWithIdIndex > -1) {
                state.data.splice(objWithIdIndex, 1)
            } else {
                state.data.push(action.payload)
            }
        },
    },
})

export const { actions: favoriteActions } = favoriteSlice
export const { reducer: favoriteReducer } = favoriteSlice
