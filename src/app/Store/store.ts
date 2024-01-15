import {
    configureStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { createReducerManager } from './reducerManager'
import { type CombinedState } from 'redux'
import { type IStateSchema } from '@/shared/lib/store/types'
import { baseApi } from '@/shared/api/baseApi'
import { favoriteReducer } from '@/entities/Favorite'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore() {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        favoriteCars: favoriteReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: import.meta.env.DEV,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),
    })

    // @ts-expect-error
    store.reducerManager = reducerManager
    return store
}
