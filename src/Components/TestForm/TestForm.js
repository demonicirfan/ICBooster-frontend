import {
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Center,
  Heading,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Result from './Result';

const randomNumber = Math.floor(Math.random() * 100 + 1);

const TestForm = () => {
  const [isVisible, setIsVisible] = useState(1);
  const [heading, setHeading] = useState('');
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    if (isVisible === 1) {
      setHeading('Vamos começar');
    } else if (isVisible < 6) {
      setHeading('Mais alguns detalhes');
    } else if (isVisible <= 8) {
      setHeading('Quase lá');
    } else if (isVisible === 9) {
      setHeading('Último passo');
    } else {
      setHeading('Resultado');
    }
  }, [isVisible]);

  const onSubmit = values => {
    if (isVisible < 9) {
      setIsVisible(preValue => preValue + 1);
    } else {
      return new Promise(resolve => {
        setTimeout(() => {
          // console.log(JSON.stringify(values, null, 2));
          setIsVisible(10);
          resolve();
        }, 3000);
      });
    }
  };

  return (
    <VStack
      justify="space-between"
      p="2rem"
      h={{ base: '50vh', md: 'full' }}
      w="full"
    >
      {isVisible < 10 && <Text>Etapa {isVisible} de 9</Text>}
      <Heading fontSize={{ base: '2xl', md: '3xl' }} p="1rem" fontWeight="500">
        {heading}
      </Heading>
      {isVisible === 10 && (
        <Text textAlign={'center'}>Risco de Insuficiência Cardíaca</Text>
      )}
      <Center my="auto" h={{ base: '50vh', md: 'full' }} w="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          {isVisible === 1 && (
            <FormControl isRequired w="18rem">
              <FormLabel htmlFor="Number" fontSize="xl" fontWeight={'300'}>
                Idade
              </FormLabel>
              <Input
                borderColor="gray.300"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _placeholder={{
                  color: 'gray.300',
                }}
                h="3rem"
                id="idade"
                placeholder="Idade"
                {...register('idade')}
              />
            </FormControl>
          )}
          {isVisible === 2 && (
            <FormControl isRequired w="18rem">
              <FormLabel htmlFor="Number" fontSize="xl" fontWeight={'300'}>
                ESV
              </FormLabel>
              <Input
                borderColor="gray.300"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _placeholder={{
                  color: 'gray.300',
                }}
                h="3rem"
                id="esv"
                placeholder="ESV"
                {...register('esv')}
              />
            </FormControl>
          )}
          {isVisible === 3 && (
            <FormControl isRequired w="18rem">
              <FormLabel htmlFor="Number" fontSize="xl" fontWeight={'300'}>
                ESSV
              </FormLabel>
              <Input
                borderColor="gray.300"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _placeholder={{
                  color: 'gray.300',
                }}
                h="3rem"
                id="essv"
                placeholder="ESSV"
                {...register('essv')}
              />
            </FormControl>
          )}
          {isVisible === 4 && (
            <FormControl isRequired w="18rem">
              <FormLabel htmlFor="Number" fontSize="xl" fontWeight={'300'}>
                IMVE
              </FormLabel>
              <Input
                borderColor="gray.300"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _placeholder={{
                  color: 'gray.300',
                }}
                h="3rem"
                id="imve"
                placeholder="IMVE"
                {...register('imve')}
              />
            </FormControl>
          )}
          {isVisible === 5 && (
            <FormControl isRequired w="18rem">
              <FormLabel htmlFor="Number" fontSize="xl" fontWeight={'300'}>
                VAE
              </FormLabel>
              <Input
                borderColor="gray.300"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _placeholder={{
                  color: 'gray.300',
                }}
                h="3rem"
                id="vae"
                placeholder="VAE"
                {...register('vae')}
              />
            </FormControl>
          )}
          {isVisible === 6 && (
            <FormControl isRequired w="18rem">
              <FormLabel htmlFor="Number" fontSize="xl" fontWeight={'300'}>
                Ureia
              </FormLabel>
              <Input
                borderColor="gray.300"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _placeholder={{
                  color: 'gray.300',
                }}
                h="3rem"
                id="ureia"
                placeholder="Ureia"
                {...register('ureia')}
              />
            </FormControl>
          )}
          {isVisible === 7 && (
            <FormControl isRequired w="18rem">
              <FormLabel htmlFor="Number" fontSize="xl" fontWeight={'300'}>
                Creatinina
              </FormLabel>
              <Input
                borderColor="gray.300"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _placeholder={{
                  color: 'gray.300',
                }}
                h="3rem"
                id="creatinina"
                placeholder="Creatinina"
                {...register('creatinina')}
              />
            </FormControl>
          )}
          {isVisible === 8 && (
            <FormControl isRequired w="18rem">
              <FormLabel htmlFor="Number" fontSize="xl" fontWeight={'300'}>
                K+ sérico
              </FormLabel>
              <Input
                borderColor="gray.300"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _placeholder={{
                  color: 'gray.300',
                }}
                h="3rem"
                id="ksérico"
                placeholder="K+ sérico"
                {...register('ksérico')}
              />
            </FormControl>
          )}
          {isVisible === 9 && (
            <FormControl isRequired w="18rem">
              <FormLabel htmlFor="Number" fontSize="xl" fontWeight={'300'}>
                Colesterol Total
              </FormLabel>
              <Input
                borderColor="gray.300"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _placeholder={{
                  color: 'gray.300',
                }}
                h="3rem"
                id="colesterolTotal"
                placeholder="Colesterol Total"
                {...register('colesterolTotal')}
              />
            </FormControl>
          )}

          {isVisible < 10 ? (
            <Button
              w="full"
              color="white"
              mt={4}
              colorScheme="blue"
              isLoading={isSubmitting}
              type="submit"
            >
              {isVisible === 9 ? 'Enviar' : 'Próximo'}
            </Button>
          ) : (
            <Center>
              <Result percentage={randomNumber} />
            </Center>
          )}
        </form>
      </Center>
    </VStack>
  );
};

export default TestForm;
