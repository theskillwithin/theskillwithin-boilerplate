import styled from '@emotion/styled'
import { ButtonLink } from '~/components/Button'

import { colors, Wrapper } from '~/styles'

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.white};
  max-width: 618px;
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  padding: 2rem;
  margin-top: -1rem;
  transition: filter 200ms;

  @media (max-width: 720px) {
    margin: -1rem 2rem 0;
  }
`

const H1 = styled.h1`
  margin: 1rem auto;

  + h1 {
    margin-top: 0;
  }
`

const NotFoundPage = () => (
  <Wrapper id="theskillwithin-content">
    <LayoutWrapper>
      <NotFoundContainer>
        <H1>404</H1>
        <H1>Page Not Found</H1>
        <p>looks like you got lost 😅</p>

        <ButtonLink to="/">Go Back Home</ButtonLink>
      </NotFoundContainer>
    </LayoutWrapper>
  </Wrapper>
)

export default NotFoundPage
