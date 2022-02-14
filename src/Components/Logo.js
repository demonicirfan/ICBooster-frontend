import { Center, Text } from '@chakra-ui/react';
import React from 'react';
const Logo = () => {
  return (
    <Center fontSize="2xl" p="1rem" w="full">
      <Text fontWeight={'600'}>ic</Text>
      <Text as="span" fontWeight={'200'}>
        booster
      </Text>
    </Center>
  );
};

export default Logo;
