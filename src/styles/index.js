import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { Link } from 'react-router-dom'

export const breakpoints = {
  xs: 375 - 1,
  s: 576,
  m: 768 - 1,
  l: 992,
  xl: 1140,
  xxl: 1324,
  xxxl: 1416,
  xxxxl: 1560,
}

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html {
        box-sizing: border-box;
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        height: 100%;
        font-family: 'Roboto', sans-serif;
      }
      body {
        margin: 0;
        height: 100%;
        font-size: 16px;
        overflow-x: hidden;
        color: ${colors.graysBlacks};
        background: ${colors.backgroundPrimary};
      }
      input,
      select,
      textarea {
        font-size: 100%;
      }

      /* sticky footer */
      #root {
        height: 100%;
      }
      #theskillwithin-site {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      #theskillwithin-content {
        flex: 1 0 auto;
      }
      footer {
        flex-shrink: 0;
      }
    `}
  />
)

export const colors = {
  primary: '#bada55',
  white: 'white',
  black: 'black',
  actionDark: 'RebeccaPurple',
  actionLight: 'purple',
  brandRed: 'tomato',
  brandRedLight: 'salmon',
  brandOrange: 'orange',
  brandOrangeLight: 'Moccasin',
  graysBlacks: 'rgba(19, 38, 48, 1)',
  graysGray70: 'rgba(123, 143, 154, 1)',
  graysGray50: 'rgba(167, 180, 187, 1)',
  graysGray30: 'rgba(215, 221, 224, 1)',
  graysGray20: 'rgba(231, 234, 236, 1)',
  graysGray10: 'rgba(236, 240, 242, 1)',
  graysGray5: 'rgba(248, 250, 251, 1)',
  graysWhite: 'rgba(255, 255, 255, 1)',
  statusGood: 'green',
  statusGoodLight: 'paleGreen',
  statusCaution: 'orangeRed',
  statusStop: 'red',
  statusNeutral: 'gray',
  backgroundPrimary: 'rgba(21, 45, 57, 1)',
  backgroundSecondary: 'rgba(36, 68, 84, 1)',
}

export const shadows = {
  base: '3px 0px 1px rgba(0, 0, 0, 0.1), 2px 0px 1px rgba(0, 0, 0, 0.06)',
  xLarge: '10px 0px 10px rgba(0, 0, 0, 0.04), 25px 0px 20px rgba(0, 0, 0, 0.1)',
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${(props) =>
    breakpoints[props.containerWidth ? props.containerWidth : 'xxxxl']}px;
  width: 100%;

  @media (max-width: ${(props) =>
      breakpoints[props.containerWidth ? props.containerWidth : 'xxxxl'] + 64}px) {
    padding: 0 2rem;
  }
`

export const ContainerFull = styled.div`
  position: ${(props) => props.position};
  margin: 0 auto;
`

export const Wrapper = styled.div`
  background: ${colors.black};
  height: 100%;
`

export const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: ${colors.graysBlacks};
`
