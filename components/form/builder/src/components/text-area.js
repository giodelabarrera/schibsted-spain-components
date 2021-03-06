import React from 'react'
import PropTypes from 'prop-types'

import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'

import WithValidator from '../validatorHoC/WithValidator'

const TextArea = ({
  errorText,
  label,
  id,
  value,
  placeholder,
  size,
  onChange
}) => (
  <MoleculeTextareaField
    errorText={errorText}
    size={size}
    label={label}
    id={id}
    value={value}
    placeholder={placeholder}
    onChange={(_, {value}) => onChange(value)}
  />
)

TextArea.displayName = 'TextArea'

TextArea.propTypes = {
  errorText: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default WithValidator(TextArea)
