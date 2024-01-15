export type { IFavoriteSchema } from '@/entities/Favorite/model/types/favoriteSchema'
export { FavoriteItem } from './ui/FavoriteItem'
export { favoriteActions, favoriteReducer } from './model/slice/favoriteSlice'
export { getFavoriteCars } from './model/selectors/favoriteSelectors'
