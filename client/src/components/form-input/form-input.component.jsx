import React from 'react';

// styled components
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, id, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer id={id} onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel
          className={otherProps.value.length ? 'shrink' : ''}
          htmlFor={id}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
