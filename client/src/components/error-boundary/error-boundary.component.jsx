import React, { Component } from 'react';

// styled components
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './error-boundary.styles';

export class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.log('error:', error);
  }

  render() {
    if (this.state.hasError)
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/O0DCcQy.png' />
          <ErrorImageText>Sorry something went wrong!</ErrorImageText>
        </ErrorImageOverlay>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
