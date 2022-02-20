import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const TakeTest = () => {
  return (
    <Link to="/test">
      <Box
        as="button"
        w="10rem"
        color="white"
        rounded="lg"
        fontSize={{ base: 'sm', md: 'md' }}
        h={'full'}
        p={{ base: '0.8rem 1.2rem', md: '1.2rem 1.8rem' }}
        backgroundColor="blue.400"
        _hover={{
          bg: 'blue.300',
        }}
        _active={{
          bg: 'blue.300',
        }}
      >
        <Text minW="6rem">Take Test</Text>
      </Box>
    </Link>
  );
};

export default TakeTest;
