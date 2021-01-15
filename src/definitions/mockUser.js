import { shape, string, object } from 'prop-types'

export const userData = {
  id: '0',
  token: null,
  username: 'Username',
  email: 'noreply@gmail.com',
  settings: {},
}

export const userDataPropType = shape({
  id: string.isRequired,
  token: string.isRequired,
  username: string.isRequired,
  email: string.isRequired,
  settings: object.isRequired,
})
