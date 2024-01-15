import { type FC, type ReactElement, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../../Store/store'

interface IProps {
    children?: ReactNode
}
export const StoreProvider: FC<IProps> = ({ children }): ReactElement => {
    const store = createReduxStore()
    return <Provider store={store}>{children}</Provider>
}
