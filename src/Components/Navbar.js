import React from 'react';
import Logo from './Logo';
import { IoLogoInstagram } from 'react-icons/io';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { Container, Flex, HStack } from '@chakra-ui/react';

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
          <a
            href="https://www.linkedin.com/in/jose-neto1"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/icbooster"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/icbooster/"
            target="_blank"
            rel="noreferrer"
          >
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
