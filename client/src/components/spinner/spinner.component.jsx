import React from 'react';

// styled components
import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
