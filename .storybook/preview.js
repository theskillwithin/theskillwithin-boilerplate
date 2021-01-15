import { addDecorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from '~/styles'
import { colors } from '~/styles'
import 'normalize.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: 'white',
      },
      {
        name: 'backgroundPrimary',
        value: colors.backgroundPrimary,
      },
      {
        name: 'backgroundSecondary',
        value: colors.backgroundSecondary,
      },
    ],
  },
}

addDecorator((story) => (
  <BrowserRouter>
    <GlobalStyle />
    {story()}
  </BrowserRouter>
))
