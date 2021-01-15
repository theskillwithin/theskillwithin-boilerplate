import { useState } from 'react'
import styled from '@emotion/styled'
import SvgMoneyBag from '~/components/icons/MoneyBag'
import Spinner, { CenterSpinner } from '~/components/Spinner'
import Input from '~/components/Input'
import Button from '~/components/Button'

import { colors, Wrapper } from '~/styles'

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${colors.white};
  width: 618px;
  height: 447px;
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  border-top: 8px solid ${colors.brandRed};
  padding: 30px 1.5rem 40px;
  margin-top: -3rem;
  transition: filter 200ms;
`

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.3;
  max-width: 428px;
  width: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 1rem auto 2rem;
`

const Home = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
  }

  return (
    <Wrapper id="theskillwithin-content">
      <LayoutWrapper>
        <LoginContainer>
          <h2>boilerplate</h2>
          <p>theskillwithin</p>
          <p>any user/pw (login doesn't acctually go anywhere)</p>

          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              disabled={!username || !password}
              varient="primary"
              size="large"
            >
              {loading ? (
                <CenterSpinner>
                  <Spinner size={25} />
                </CenterSpinner>
              ) : (
                'Sign In'
              )}
            </Button>
          </Form>

          <Icons>
            <SvgMoneyBag />
          </Icons>
        </LoginContainer>
      </LayoutWrapper>
    </Wrapper>
  )
}

export default Home
