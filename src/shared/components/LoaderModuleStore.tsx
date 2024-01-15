import { type FC, type ReactElement, type ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import {
    type ReduxStoreWithManager,
    type TReducersList,
    type TStateSchemaKey,
} from '@/shared/lib/store/types'

interface IProps {
    reducer: TReducersList
    children: ReactNode
    isRemove?: boolean
}
export const LoaderModuleStore: FC<IProps> = ({
    reducer,
    children,
    isRemove = true,
}): ReactElement => {
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()
    useEffect(() => {
        Object.entries(reducer).forEach(([name, reducer]) => {
            const init = store.reducerManager.getReducerMap()
            if (!init[name as TStateSchemaKey]) {
                store.reducerManager.add(name as TStateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }
        })
        return () => {
            if (isRemove) {
                Object.entries(reducer).forEach(([name]) => {
                    store.reducerManager.remove(name as TStateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
    }, [])
    return <>{children}</>
}
