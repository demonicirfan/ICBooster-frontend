import { Box, Center, Container } from '@chakra-ui/react';
import React from 'react';
import TestForm from '../Components/TestForm/TestForm';

const Result = () => {
  return (
    <Container maxW="100vw" h="100vh" bg="brand.300" p="0" m="0">
      <Box w={{ base: 'full', md: '30rem' }} mx="auto" my={'auto'}>
        <Center
          alignItems={{ base: 'start', md: 'center' }}
          pt={{ base: '20vh', md: '0' }}
          shadow="xl"
          w={{ base: 'full', md: '30rem' }}
          h={{ base: 'full', md: '25rem' }}
          rounded={{ base: '0', md: '2xl' }}
          bg={'white'}
          position="absolute"
          mt={{ base: '0', md: '15rem' }}
        >
          <TestForm />
        </Center>
      </Box>
      <Box w="full" h="full" overflow="hidden">
        <svg
          viewBox="0 0 1510 1049"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1510 272.464C999.561 197.292 291.144 588.379 5.92157 793.318L0 1005.55L14.8039 1030.66L47.3725 1045.24L185.049 1048.48C400.199 1049.83 900.374 1048.48 1185.79 1045.24C1471.21 1042 1510 1027.42 1510 882.422V272.464Z"
            fill="url(#paint0_linear_64_2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_64_2"
              x1="755"
              y1="263"
              x2="897.913"
              y2="1069.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6FB1FF" />
              <stop offset="1" stop-color="#6FB1FF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </Container>
  );
};

export default Result;
