/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Container from './src/pages/Container';
import ModalTest from './src/components/ModalTest';
import PopoverTest from './src/components/PopoverTest';

const App = () => {
  return (
    <Container>
      <PopoverTest />
    </Container>
  );
};

export default App;
