import React from 'react';
import Logo from './Logo';
import { IoLogoInstagram } from 'react-icons/io';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import {  Container, Flex, HStack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Container
      minW="99vw"
      position="absolute"
      zIndex="10"
      pt={{ base: '0rem', md: '1rem' }}
    >
      <HStack mx="auto" maxW="8xl">
        <HStack spacing={{ base: '0.5rem', md: '2rem' }}>
          <a href="#">
            <FiTwitter size={24} />
          </a>
          <a href="#">
            <FiFacebook size={24} />
          </a>
          <a href="#">
            <IoLogoInstagram size={28} />
          </a>
        </HStack>
        <Flex
          w={'full'}
          alignItems={'center'}
          justifyContent={{ base: 'flex-end', md: 'space-between' }}
          mr={{ base: '0rem', md: '4rem' }}
        >
          <Logo />
        </Flex>
      </HStack>
    </Container>
  );
};

export default Navbar;
