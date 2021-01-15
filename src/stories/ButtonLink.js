import React from 'react'
import PropTypes from 'prop-types'

import { ButtonLink } from '~/components/Button'

const StoryButtonLink = ({
  variant,
  children,
  size,
  disabled,
  textTransform,
  to,
  ...props
}) => {
  return (
    <ButtonLink
      variant={variant}
      size={size}
      disabled={disabled}
      textTransform={textTransform}
      to={to}
      {...props}
    >
      {children}
    </ButtonLink>
  )
}

StoryButtonLink.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['medium', 'large']),
  textTransform: PropTypes.oneOf(['none', 'uppercase']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  to: PropTypes.string.isRequired,
}

StoryButtonLink.defaultProps = {
  variant: 'primary',
  size: 'medium',
  onClick: undefined,
  textTransform: 'none',
  disabled: false,
  to: '/',
}

export { StoryButtonLink }
