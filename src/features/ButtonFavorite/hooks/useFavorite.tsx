import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks'
import { favoriteActions, getFavoriteCars } from '@/entities/Favorite'
import { type PayloadAction } from '@reduxjs/toolkit'

interface IReturn {
    toggleFavorite: () => PayloadAction<number, 'favoriteSlice/toggleFavorite'>
    isFavorite: boolean
}
export const useFavorite = (id: number): IReturn => {
    const isFavorite = useAppSelector(getFavoriteCars).includes(id)
    const dispatch = useAppDispatch()
    const toggleFavorite = (): PayloadAction<
        number,
        'favoriteSlice/toggleFavorite'
    > => dispatch(favoriteActions.toggleFavorite(id))
    return { isFavorite, toggleFavorite }
}
