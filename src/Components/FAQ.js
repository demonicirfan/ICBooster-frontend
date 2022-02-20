import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import picture from '../Images/plus.png';
const Data = [
  {
    question: 'O que é ICBooster?',
    answer:
      'ICBooster é uma solução inovadora que utiliza modelos matemáticos de Machine Learning para ajudar você Médico a fornecer um cuidado de excelência ao paciente. ',
  },
  {
    question: 'O ICBooster é uma ferramenta diagnóstica?',
    answer:
      'De forma alguma. </b> ICBooster é um projeto que ainda se encontra em desenvolvimento, com o objetivo de complementar e otimizar o cuidado médico para seus pacientes',
  },
  {
    question:
      'O ICBooster garante a confidenciabilidade dos dados do meu paciente?',
    answer:
      'Nós não armazenamos nenhum dado inserido pelo médico além do email de cadastro, para controle de acesso à plataforma',
  },
  {
    question: 'ICBooster irá me cobrar pelo uso?',
    answer:
      'A ferramenta é gratuita até o momento. O projeto se encontra em desenvolvimento, e novas atualizações serão disponibilizadas no futuro',
  },
  {
    question: 'ICBooster garante os resultados fornecidos?',
    answer:
      'Não. Como vivemos em um mundo de incertezas e probabilidades, você não deve interpretar uma probabilidade acima de 50% como uma certeza diagnóstica. Diagnóstico é competência médica, não computacional!',
  },
  {
    question:
      'Como ICBooster calcula as probabilidades de um paciente vir a desenvolver IC no futuro?',
    answer:
      'ICBooster utiliza Modelos Matemáticos de Aprendizagem Estatística treinados em ampla base de dados de modo a fornecer as melhores estimativas de risco futuro possíveis.',
  },
];
const FAQ = () => {
  return (
    <Stack
      mb="6rem"
      flexDirection={{ base: 'column', lg: 'row-reverse' }}
      mx="auto"
      alignItems={'center'}
      justifyContent="space-around"
    >
      <Center w={{ base: '90%', md: '44%' }} flexDirection={'column'}>
        <Heading fontSize={{ base: '3xl', md: '5xl' }} my="2rem">
          Commonly Asked Questions
        </Heading>
        <Accordion w="full" fontSize={{ base: 'xs', md: 'sm' }}>
          {Data.map(item => (
            <AccordionItem px={{ base: '0', md: '1rem' }}>
              <Text fontSize={{ base: 'sm', md: 'md' }} py="0.5rem">
                <AccordionButton h="5rem">
                  <Box flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4} fontWeight="300">
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Center>
      <Center py="2rem">
        <Image src={picture} h={{ base: '20rem', md: '26rem' }} />
      </Center>
    </Stack>
  );
};

export default FAQ;
