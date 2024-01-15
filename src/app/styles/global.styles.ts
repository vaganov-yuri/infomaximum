export const GLOBAL_STYLES = {
    '*:not(svg *)': {
        all: 'unset',
        display: 'revert',
        outline: 'revert',
    } as const,
    'html, body, #root': {
        margin: 0,
        padding: 0,
        height: '100dvh',
    },
    body: {
        'box-sizing': 'border-box',
        'overflow-x': 'hidden',
        'font-family': 'Inter, sans-serif',
        'font-style': 'normal',
        color: '#000000',
        'font-size': '16px',
        'font-weight': '500',
        'line-height': '18px',
    },
    'a, select, button': {
        cursor: 'pointer',
    },
    img: {
        'max-width': '100%',
    },
}
