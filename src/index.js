import ReactDomClient from 'react-dom/client'

import App from './App'
import './index.css'

const container = document.querySelector('#root')

const root = ReactDomClient.createRoot(container)

root.render(<App />)

//ReactDom.render(<App />, document.querySelector('#root'))