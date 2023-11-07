/* eslint-disable prettier/prettier */
import React from 'react';
import { NativeBaseProvider } from 'native-base';

const Container = ({children}) => {
  return (
    <NativeBaseProvider>
      {children}
    </NativeBaseProvider>
  );
};

export default Container;
