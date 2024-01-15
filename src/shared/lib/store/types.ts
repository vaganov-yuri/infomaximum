import {
    type AnyAction,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type CombinedState } from 'redux'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type createReduxStore } from '@/app/Store/store'
import { type baseApi } from '@/shared/api/baseApi'
import { type IFavoriteSchema } from '@/entities/Favorite'
import { type ICarsListSchema } from '@/entities/Car'

export interface IStateSchema {
    favoriteCars: IFavoriteSchema
    carsList?: ICarsListSchema
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>
}

export type TReducersList = {
    [name in TStateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>
}

export interface IReducerManger {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (
        state: IStateSchema,
        action: AnyAction
    ) => CombinedState<IStateSchema>
    add: (key: TStateSchemaKey, reducer: Reducer) => void
    remove: (key: TStateSchemaKey) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<IStateSchema> {
    reducerManager: IReducerManger
}

export type TStateSchemaKey = keyof IStateSchema

export type RootState = ReturnType<
    ReturnType<typeof createReduxStore>['getState']
>

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
