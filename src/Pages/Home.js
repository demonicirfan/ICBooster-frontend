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
import AboutTheTec from '../Components/AboutTheTec';
import AboutUS from '../Components/AboutUS';
import FAQ from '../Components/FAQ';
import HeroInput from '../Components/HeroInput';
import DNA from '../Images/DNA.png';

const Home = () => {
  return (
    <Container maxW="8xl" p={{ base: '1rem', xl: '0' }}>
      <Stack
        direction={['column', 'column', 'row']}
        w="full"
        justify={'space-between'}
        alignItems="center"
        spacing={{ base: '6rem', md: '0' }}
        p={{ base: '2rem', md: '3rem 0rem' }}
      >
        <VStack
          gap={{ base: '1rem', md: '2rem' }}
          textAlign={['center', 'center', 'left']}
          maxW={['80vw', '70vw', '36vw']}
          alignItems={{ base: 'center', md: 'start' }}
          justify="center"
          mx="auto"
          w="full"
          mt={{ base: '4rem', md: '0' }}
        >
          <Heading
            fontSize={['3xl', '4xl', '4xl', '7xl']}
            fontWeight="600"
            alignItems={['center', 'center', 'left']}
          >
            A Inteligência Artificial a favor do Médico
          </Heading>
          <Text
            textAlign={['center', 'center', 'left']}
            fontSize={['xs', 'xs', 'sm']}
            textColor="gray.600"
            maxW="34rem"
          >
            Estime a probabilidade de um paciente desenvolver Insuficiência
            Cardíaca nos próximos 5 anos com base nos seus dados clínicos e
            complementares
          </Text>
          <HeroInput />
        </VStack>
        <Stack
          ml="auto"
          w="fit-content"
          justifyContent={'right'}
          alignItems="center"
          direction={['column', 'column', 'row']}
        >
          <Center
            h={['8rem', '8rem', '0rem']}
            w={['8rem', '8rem', '12rem', '16rem']}
            transform={[
              'translateY(30px)',
              'translateY(40px)',
              'translateX(120px)',
            ]}
          >
            <Image src={DNA} zIndex="1" overflow={'visible'} />
          </Center>
          <Box
            minW={['90vw', '80vw', '24vw']}
            h={['40vh', '50vh', '90vh']}
            bg="brand.300"
            rounded="2xl"
            alignSelf={'right'}
            overflow={{ base: 'hidden', md: 'none' }}
          >
            <Center
              bg="brand.200"
              w="full"
              minW={['90vw', '80vw', '24vw']}
              h="full"
              alignItems={'end'}
            >
              <Box rounded="xl" overflow="hidden">
                <svg
                  viewBox="0 0 511 486"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M510.5 6.5C338.1 -39.9 98.8333 201.5 2.5 328L0.5 459L5.5 474.5L16.5 483.5L63 485.5C135.667 486.333 304.6 485.5 401 483.5C497.4 481.5 510.5 472.5 510.5 383V6.5Z"
                    fill="#93C4FE"
                  />
                </svg>
              </Box>
            </Center>
          </Box>
        </Stack>
      </Stack>
      <AboutTheTec />
      <FAQ />
      <AboutUS />
    </Container>
  );
};

export default Home;
