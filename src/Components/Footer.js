import { Box, Center, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <Container maxW="full" bg="white" color='brand.500' p='1rem'>
      <Flex
        mx="auto"
        maxW={'8xl'}
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        align={'center'}
      >
        <Box>
          <Logo />
        </Box>
              <Text
                  fontWeight={'300'}
                  fontSize='xs'
          _hover={{
            color: 'brand.400',
          }}
        >
          <a href="https://irfanasif.me">Website Developed by Irfan Asif</a>
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
