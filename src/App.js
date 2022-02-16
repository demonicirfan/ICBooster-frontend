import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, Link } from 'react-router-dom';
import theme from './Theme';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Error from './Pages/Error';
import Result from './Pages/Result';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};

function App() {
  return (
    <ChakraProvider theme={newTheme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Result />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
