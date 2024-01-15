import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react'
import { ErrorBoundaryWindow } from '@/widgets/ErrorBoundaryWindow'
import { Loader } from '@/shared/ui/Loader'

interface IProps {
    children: ReactNode
}
interface IState {
    hasError: boolean
}
export class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(): { hasError: boolean } {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.log(error, info.componentStack)
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <Suspense fallback={<Loader />}>
                    <ErrorBoundaryWindow />
                </Suspense>
            )
        }

        return this.props.children
    }
}
