import { render, screen } from '@testing-library/react'

import Login from '~/scenes/Home'

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}))

test('home - theskillwithin renders', () => {
  render(<Login />)
  expect(screen.getByText(`theskillwithin`))
})
