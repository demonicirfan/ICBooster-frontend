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
      shadow={'xl'}
      flexDirection="row"
      rounded="md"
      alignItems={'center'}
      m="1rem"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center>
          <FormControl bg="white">
            <Input
              rounded="md"
              color="gray.300"
              borderColor="white"
              w="20rem"
              h="4rem"
              bg="white"
              id="email"
              type="email"
              placeholder="Enter Your Email"
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
            rounded="md"
            h="full"
            p="1.2rem 1.8rem"
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
