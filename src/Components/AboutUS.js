import { Heading, Image, Text, VStack,  Flex } from '@chakra-ui/react';
import React from 'react';
import DNA from '../Images/DNA.png';
const Data = [
  {
    name: 'José Joaquim R. Neto',
    about:
      'Graduando em Medicina pela Universidade Estadual de Santa Cruz - UESC. Cientista de Dados com ênfase em algoritmos preditivos aplicados ao diagnóstico',
    contact: 'Email: jraposoneto60@gmail.com',
  },
  {
    name: 'Nelson Dinamarco Ludovico',
    about:
      'Pós-doutorado pela Florida Christian University-FCU/EUA; Doutorado pelo Laboratório de Hipertensão Arterial da Faculdade de Ciências Médicas da Universidade Estadual de Campinas- UNICAMP; Mestrado em Cardiologia pelo Ambulatório de Hipertensão Arterial/Cardiopatia Hipertensiva da Escola Paulista de Medicina - UNIFESP; Professor Titular de Cardiologia - Colegiado de Medicina - Universidade Estadual Santa Cruz - UESC; Fellowship American Heart Association - FAHA Especialização (Lato-Sensu) em Cardiologia pela Faculdade de Ciências Médicas de Minas Gerais; Membro da Diretoria da Sociedade Brasileira de Hipertensão - SBH; Graduado em Medicina pela Faculdade de Medicina de Valença - CesGranRio; Graduado em Farmácia e Bioquímica pela Universidade Paulista; Graduado em Engenharia Mecânica pelo Instituto Maua de Tecnologia - IMT.',
    contact: 'Phone: (073) 36805114',
  },
];
const AboutUS = () => {
  return (
    <VStack
      overflow="hidden"
      rounded="xl"
      maxW="8xl"
      w="full"
      color="white"
      p={{ base: '2rem', md: '5rem' }}
      bg="brand.300"
      mx={'0'}
      my={{ base: '4rem', md: '8rem' }}
    >
      <VStack pb="1rem" spacing={{ base: '1rem', md: '2rem' }}>
        <Heading fontSize={{ base: '2xl', md: '5xl' }} fontWeight="500">
          About US
        </Heading>
      </VStack>

      {Data.map(contact => (
        <VStack
          zIndex={'1'}
          maxW={['90vw', '80vw', '70vw', '70vw', '50vw']}
          alignItems={{ base: 'start', md: 'start' }}
          py="1rem"
        >
          <Text fontWeight="600" fontSize={['md', 'xl', '2xl']}>
            {contact.name}
          </Text>
          <Text fontSize={['xs', 'sm', 'md']}>{contact.about}</Text>
          <Text fontWeight="500" fontSize={['sm', 'md', 'lg']}>
            {contact.contact}
          </Text>
        </VStack>
      ))}
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        alignItems={'end'}
        justifyContent="flex-end"
        rounded={'xl'}
        overflow={'hidden'}
        position="absolute"
        h={['39rem', '39rem']}
        maxW="8xl"
        w={['92vw', '94vw', '96vw']}
      >
        <Image
          selfAlign="end"
          src={DNA}
          maxH={['16rem', '16rem', '30rem']}
          h="full"
          transform={[
            'translate(0rem, 0rem)rotate(-30deg)',
            'translate(0rem, 0rem)rotate(-30deg)',
            'translate(3rem, 0rem)rotate(-30deg)',
          ]}
        />
      </Flex>
    </VStack>
  );
};

export default AboutUS;
