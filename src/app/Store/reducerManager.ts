import { combineReducers, type ReducersMapObject } from '@reduxjs/toolkit'
import {
    type IReducerManger,
    type IStateSchema,
    type TStateSchemaKey,
} from '@/shared/lib/store/types'

export function createReducerManager(
    initialReducers: ReducersMapObject<IStateSchema>
): IReducerManger {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: TStateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,
        reduce: (state, action) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete state[key]
                }
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key) => {
            if (!key || !reducers[key]) {
                return
            }
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        },
    }
}
