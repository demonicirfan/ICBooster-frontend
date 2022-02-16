import { Heading, Text, VStack, Wrap } from '@chakra-ui/react';
import React from 'react';
const Data = [
  { emoji: '📝', title: '3 algoritmos integrados' },
  { emoji: '🖥', title: 'Validação rigorosa' },
  { emoji: '⏳', title: 'Otimização de estimativas' },
  { emoji: '🔬', title: 'Projeto multiprofissional' },
  { emoji: '💰', title: 'Estimativa low cost' },
  { emoji: '⚙', title: 'Machine Learning aplicado' },
];
const AboutTheTec = () => {
  return (
    <VStack my={{ base: '4rem', md: '8rem' }}>
      <VStack spacing={{ base: '1rem', md: '2rem' }}>
        <Heading fontSize={{ base: '2xl', md: '5xl' }} fontWeight="500">
          Sobre a Tecnologia
        </Heading>
        <Text fontSize={['xs', 'xs', 'sm']} textAlign="center" maxW="36rem" textColor='gray.600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo
          nisi, mauris integer pharetra, cras.{' '}
        </Text>
      </VStack>
      <Wrap
        spacing={{ base: '1rem', md: '3rem' }}
        maxW="4xl"
        align={'center'}
        justify="center"
        py={{ base: '2rem', md: '3.5rem' }}
      >
        {Data.map(card => (
          <VStack
            rounded="2xl"
            outline="1px solid #F3F3F3"
            bgGradient="linear(120deg, #bcbcbc28, #f4f4f470)"
            border="2px solid gray.200"
            justify="space-around"
            p={{ base: '1.2rem', md: '2rem' }}
            spacing={{ base: '1rem', md: '2.4rem' }}
            minW={{ base: '8rem', md: '15rem' }}
            minH={{ base: '9rem', md: '15rem' }}
          >
            <Heading fontSize={{ base: '2rem', md: '6xl' }}>
              {card.emoji}
            </Heading>
            <Text
              maxW={{ base: '6rem', md: '10rem' }}
              fontSize={{ base: '10px', md: 'sm' }}
              textAlign={'center'}
            >
              {card.title}
            </Text>
          </VStack>
        ))}
      </Wrap>
    </VStack>
  );
};

export default AboutTheTec;
