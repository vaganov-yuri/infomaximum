import {
    type FC,
    type HTMLAttributes,
    type RefObject,
    useEffect,
    useState,
} from 'react'
import { createPortal } from 'react-dom'
import { css } from '@emotion/react'
import { useThrottle } from '@/shared/lib/hooks/useThrottle'

interface IProps extends HTMLAttributes<HTMLElement> {
    targetRef: RefObject<HTMLElement>
    shown: boolean
    onShownChange: (shown: boolean) => void
}

const calcCoords = (
    targetElement: HTMLElement
): { left: number; top: number } => {
    const rect = targetElement.getBoundingClientRect()
    return {
        top: window.scrollY + rect.bottom,
        left: rect.left,
    }
}

export const Droprown: FC<IProps> = (props) => {
    const { targetRef, shown, onShownChange, children, ...restProps } = props
    const [coords, setCoords] = useState({ top: 0, left: 0 })
    useEffect(() => {
        setCoords(calcCoords(targetRef.current!))
    }, [])

    const windowResizeListener = useThrottle(() => {
        setCoords(calcCoords(targetRef.current!))
    }, 100)

    useEffect(() => {
        const documentClickListener = (): void => {
            onShownChange(false)
        }

        if (shown) {
            document.addEventListener('click', documentClickListener)
            window.addEventListener('resize', windowResizeListener)
        }
        return () => {
            document.removeEventListener('click', documentClickListener)
            window.removeEventListener('resize', windowResizeListener)
        }
    }, [onShownChange, shown])

    return shown
        ? createPortal(
              <div
                  {...restProps}
                  css={css`
                      position: absolute;
                      ${{ ...coords }}
                  `}
              >
                  {children}
              </div>,
              document.getElementById('overlay')!
          )
        : null
}
