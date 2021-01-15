import { oneOf } from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import isPropValid from '@emotion/is-prop-valid'

import { Link } from 'react-router-dom'
import { colors } from '~/styles'

export const variants = {
  primary: {
    background: colors.backgroundPrimary,
    color: colors.brandRed,
    hoverBackground: colors.graysBlacks,
    disabledBackground: colors.graysGray70,
  },
  secondary: {
    background: colors.graysGray5,
    color: colors.actionDark,
    hoverBackground: colors.graysGray10,
    disabledBackground: colors.graysGray50,
  },
}

const sizes = {
  medium: {
    height: '44px',
    fontSize: '16px',
  },
  large: {
    height: '50px',
    fontSize: '18px',
  },
}

const styles = (props) => css`
  position: relative;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0 1.5rem;
  border: unset;
  color: ${variants[props.variant].color};
  background: ${variants[props.variant].background};
  border-radius: 3px;
  height: ${sizes[props.size].height};
  line-height: ${sizes[props.size].height};
  font-size: ${sizes[props.size].fontSize};
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  text-align: center;
  text-transform: ${props.textTransform};

  &:hover {
    background: ${variants[props.variant].hoverBackground};
  }

  &:disabled {
    background: ${variants[props.variant].disabledBackground};
  }
`

const Button = styled.button(styles)

const ButtonLink = styled((props) => <Link {...props} />, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'textTransform',
})(styles)

const ButtonAnchor = styled.a(styles)

const defaultProps = {
  variant: 'primary',
  size: 'medium',
}

const propTypes = {
  variant: oneOf(['primary', 'secondary']),
  size: oneOf(['medium', 'large']),
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

ButtonLink.defaultProps = defaultProps
ButtonLink.propTypes = propTypes

ButtonAnchor.defaultProps = defaultProps
ButtonAnchor.propTypes = propTypes

export { ButtonLink, ButtonAnchor }

export default Button
