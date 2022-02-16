import {
  Center,
  Input,
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const HeroInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Center
      alignSelf={{ base: 'center', md: 'start' }}
      shadow={'2xl'}
      flexDirection="row"
      rounded="lg"
      alignItems={'center'}
      m={{ base: '0.4rem', md: '2rem' }}
      h={{ base: '3rem', md: '4rem' }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center>
          <FormControl bg="white" roundedLeft="lg" border="0px solid white">
            <Input
              roundedLeft="lg"
              fontSize={{ base: 'sm', md: 'md' }}
              w={{ base: '50vw', md: '16vw' }}
              h={{ base: '3rem', md: '4rem' }}
              bg="white"
              id="email"
              textColor="gray.600"
              type="email"
              placeholder="Enter Your Email"
              _placeholder={{
                color: 'gray.200',
              }}
              _hover={{ borderColor: 'white', bg: 'white', color: 'gray.300' }}
              _active={{ borderColor: 'white', bg: 'white', color: 'gray.300' }}
              _focus={{ borderColor: 'white', bg: 'white', color: 'gray.300' }}
              {...register('email', { required: true })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>{' '}
          <Box
            as="button"
            color="white"
            rounded="lg"
            fontSize={{ base: 'sm', md: 'md' }}
            h={'full'}
            p={{ base: '0.8rem 1.2rem', md: '1.2rem 1.8rem' }}
            backgroundColor="brand.300"
            _hover={{
              bg: 'blue.300',
            }}
            _active={{
              bg: 'blue.300',
            }}
          >
            Button
          </Box>
        </Center>
      </form>
    </Center>
  );
};

export default HeroInput;
