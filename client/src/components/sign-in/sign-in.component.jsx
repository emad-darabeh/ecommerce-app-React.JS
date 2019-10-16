import React, { useState } from 'react';

// styled components
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

// components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// redux
import { connect } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label='Email'
          id='sign-in-email'
          type='email'
          name='email'
          value={email}
          required
        />

        <FormInput
          handleChange={handleChange}
          label='Password'
          id='sign-in-password'
          type='password'
          name='password'
          value={password}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>sign in</CustomButton>
          <CustomButton
            type='button'
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapActionsToProps = {
  googleSignInStart,
  emailSignInStart
};

export default connect(
  null,
  mapActionsToProps
)(SignIn);
