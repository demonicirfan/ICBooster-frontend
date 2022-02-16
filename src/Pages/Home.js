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
import FAQ from '../Components/FAQ';
import HeroInput from '../Components/HeroInput';
import DNA from '../Images/DNA.png';

const Home = () => {
  return (
    <Container maxW="8xl" pt={{ base: '3rem', md: '2rem' }}>
      <Stack
        direction={['column', 'column', 'row']}
        w="full"
        justify={'space-between'}
        alignItems="center"
        spacing={{ base: '6rem', md: '0' }}
      >
        <VStack
          gap={{ base: '1rem', md: '2rem' }}
          textAlign={['center', 'center', 'left']}
          maxW={['80vw', '70vw', '36vw']}
          alignItems={{ base: 'center', md: 'start' }}
          justify="center"
          mx="auto"
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
          >
            <Center bg="brand.200" w="full" h="full" />
          </Box>
        </Stack>
      </Stack>
      <AboutTheTec />
      <FAQ />
    </Container>
  );
};

export default Home;
