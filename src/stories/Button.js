import React from 'react'
import PropTypes from 'prop-types'

import Button from '~/components/Button'

const StoryButton = ({
  variant,
  children,
  size,
  disabled,
  textTransform,
  type,
  ...props
}) => {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      disabled={disabled}
      textTransform={textTransform}
      {...props}
    >
      {children}
    </Button>
  )
}

StoryButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['medium', 'large']),
  textTransform: PropTypes.oneOf(['none', 'uppercase']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

StoryButton.defaultProps = {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  onClick: undefined,
  textTransform: 'none',
  disabled: false,
}

export default StoryButton
