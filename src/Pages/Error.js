import { Center, Text } from '@chakra-ui/react';
import React from 'react';

const Error = () => {
  return (
    <Center
      h="90vh"
      alignItems={'center'}
      textAlign="center"
      flexDirection={'column'}
    >
      <Text fontSize={'9xl'} fontWeight="700">
        4🥴4
      </Text>
      <Text fontWeight={'300'} fontSize="3xl">
        oops! page not found
      </Text>
    </Center>
  );
};

export default Error;
