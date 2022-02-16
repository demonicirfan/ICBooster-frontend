import { Center, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Center
      fontSize="2xl"
      p={{ base: '1rem 0rem', md: '1rem' }}
      w={{ base: 'fit-content', md: 'full' }}
    >
      <Text fontWeight={'600'}>ic</Text>
      <Link to="/">
        <Text as="span" fontWeight={'200'}>
          booster
        </Text>
      </Link>
    </Center>
  );
};

export default Logo;
