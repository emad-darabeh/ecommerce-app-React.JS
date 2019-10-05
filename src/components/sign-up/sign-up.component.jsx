import React, { useState } from 'react';

// styled components
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

// components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// redux
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart(email, password, { displayName });
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserCredentials({ [name]: value, ...userCredentials });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          handleChange={handleChange}
          label='Name'
          id='displayName'
          name='displayName'
          type='text'
          value={displayName}
          required
        />
        <FormInput
          handleChange={handleChange}
          label='Email'
          id='sign-up-email'
          name='email'
          type='email'
          value={email}
          required
        />
        <FormInput
          handleChange={handleChange}
          label='Password'
          id='sign-up-password'
          name='password'
          type='password'
          value={password}
          required
        />
        <FormInput
          handleChange={handleChange}
          label='Confirm Password'
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          required
        />

        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapActionsToProps = {
  signUpStart
};

export default connect(
  null,
  mapActionsToProps
)(SignUp);
