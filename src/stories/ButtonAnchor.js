import React from 'react'
import PropTypes from 'prop-types'

import { ButtonAnchor } from '~/components/Button'

const StoryButtonAnchor = ({
  variant,
  children,
  size,
  disabled,
  textTransform,
  href,
  ...props
}) => {
  return (
    <ButtonAnchor
      variant={variant}
      size={size}
      disabled={disabled}
      textTransform={textTransform}
      href={href}
      {...props}
    >
      {children}
    </ButtonAnchor>
  )
}

StoryButtonAnchor.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['medium', 'large']),
  textTransform: PropTypes.oneOf(['none', 'uppercase']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  href: PropTypes.string.isRequired,
}

StoryButtonAnchor.defaultProps = {
  variant: 'primary',
  size: 'medium',
  onClick: undefined,
  textTransform: 'none',
  disabled: false,
  href: '/',
}

export { StoryButtonAnchor }
