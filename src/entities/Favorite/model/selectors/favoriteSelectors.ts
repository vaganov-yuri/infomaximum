import { type IStateSchema } from '@/shared/lib/store/types'

export const getFavoriteCars = (state: IStateSchema): number[] =>
    state.favoriteCars.data
