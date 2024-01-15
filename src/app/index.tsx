import { createRoot } from 'react-dom/client'
import { App } from './App'

const rootNodeId = 'root'

const container = document.getElementById(rootNodeId)

if (!container) {
    throw new Error(`Не найден Dom элемент с ${rootNodeId} `)
}

const root = createRoot(container)

root.render(<App />)
