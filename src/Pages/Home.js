import {
  Box,
  Container,
  Center,
  Heading,
  Stack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import HeroInput from '../Components/HeroInput';
import DNA from '../Images/DNA.png';

const Home = () => {
  return (
    <Container border="2px solid pink" maxW="8xl">
      <Stack
        direction={['column', 'column', 'row']}
        border="2px solid yellow"
        w="full"
      >
        <VStack
          border="2px solid purple"
          textAlign={['center', 'center', 'left']}
          maxW={['70vw', '50vw', '36vw']}
          alignItems="center"
          justify="center"
          mx="auto"
        >
          <Heading
            fontSize={['3xl', '5xl', '7xl']}
            fontWeight="600"
            alignItems={['center', 'center', 'left']}
          >
            A Inteligência Artificial a favor do Médico
          </Heading>
          <Text
            textAlign={['center', 'center', 'left']}
            fontSize={['xs', 'xs', 'sm']}
          >
            Estime a probabilidade de um paciente desenvolver Insuficiência
            Cardíaca nos próximos 5 anos com base nos seus dados clínicos e
            complementares
          </Text>
          <HeroInput />
        </VStack>
        <Stack
          w="full"
          border="2px solid green"
          justifyContent={'center'}
          alignItems="center"
          direction={['column', 'column', 'row']}
        >
          <Center
            h={['10rem', '10rem', '0rem']}
            w={['8rem', '10rem', '16rem']}
            border="2px solid red"
          >
            <Image src={DNA} zIndex="1" overflow={'visible'} />
          </Center>
          <Box
            w="20rem"
            h="50rem"
            transform={[
              'translateY(-30px)',
              'translateY(-40px)',
              'translateX(-120px)',
            ]}
          >
            <svg
              width="24vw"
              height="80vh"
              viewBox="0 0 511 893"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="511" height="893" rx="28" fill="#A8D0FF" />
              <path
                d="M510.5 413.5C338.1 367.1 98.8333 608.5 2.5 735L0.5 866L5.5 881.5L16.5 890.5L63 892.5C135.667 893.333 304.6 892.5 401 890.5C497.4 888.5 510.5 879.5 510.5 790V413.5Z"
                fill="url(#paint0_linear_14_67)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_14_67"
                  x1="255.5"
                  y1="407.658"
                  x2="406"
                  y2="872.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8CC0FD" />
                  <stop offset="1" stop-color="#A8D0FF" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
