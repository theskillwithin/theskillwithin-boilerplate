import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { css } from '@emotion/react'
import { GlobalStyle } from './styles'

import App from './App'

import 'normalize.css'

// NOTE: the css on root element is so emotionjs
// doesn't produce duplicate styles

const rootElement = (
  <div
    css={css`
      margin: 0;
      height: 100%;
    `}
  >
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </div>
)

ReactDOM.render(rootElement, document.getElementById('root'))
