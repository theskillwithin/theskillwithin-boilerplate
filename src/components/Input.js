import { string, bool, func } from 'prop-types'
import styled from '@emotion/styled'
import { colors } from '~/styles'

const InputStyle = styled.input`
  height: 48px;
  padding: 1em;
  background: ${colors.white};
  border: 1px solid ${colors.graysGray20};
  border-radius: 2px;
  font-size: 16px;
  line-height: 100%;
  outline: 0;
  &::placeholder {
    font-weight: 400;
    color: ${colors.graysGray50};
    font-size: 16px;
  }

  &:focus {
    filter: drop-shadow(0px 0px 5px #57d8ff);
  }

  &:disabled {
    background: ${colors.graysGray20};
  }
`

const Input = ({ type, required, onChange, placeholder, disabled, ...props }) => (
  <InputStyle
    type={type}
    required={required}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    {...props}
  />
)

Input.defaultProps = {
  type: 'text',
  required: false,
  placeholder: '',
  disabled: false,
}

Input.propTypes = {
  type: string,
  required: bool,
  onChange: func.isRequired,
  placeholder: string,
  value: string,
  disabled: bool,
}

export default Input
