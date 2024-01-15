import { useCallback, useRef } from 'react'

export function useThrottle(
    callback: (...args: any[]) => void,
    delay: number
): (...args: any[]) => void {
    const throttleRef = useRef(false)

    return useCallback(
        (...args) => {
            if (!throttleRef.current) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                callback(...args)
                throttleRef.current = true

                setTimeout(() => {
                    throttleRef.current = false
                }, delay)
            }
        },
        [callback, delay]
    )
}
