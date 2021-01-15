import { number } from 'prop-types'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { colors } from '~/styles'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`

const SpinnerSVG = styled.svg`
  display: flex;
  justify-content: center;
  align-content: center;
  animation: ${rotate} 2s linear infinite;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  z-index: ${(props) => props.zIndex};

  circle {
    stroke: ${colors.white};
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`

export const CenterSpinner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Spinner = ({ size, zIndex }) => (
  <SpinnerSVG width={size} height={size} viewBox="0 0 50 50" zIndex={zIndex}>
    <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
  </SpinnerSVG>
)

Spinner.defaultProps = {
  size: 30,
  zIndex: 2,
}

Spinner.propTypes = {
  size: number,
  zIndex: number,
}

export default Spinner
