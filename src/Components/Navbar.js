import React from 'react';
import Logo from './Logo';
import { IoLogoInstagram } from 'react-icons/io';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { Container, Flex, HStack, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Container maxW={'8xl'}>
      <HStack>
        <HStack spacing="2rem">
          <a href="#">
            <FiTwitter size={28} />
          </a>
          <a href="#">
            <FiFacebook size={28} />
          </a>
          <a href="#">
            <IoLogoInstagram size={32} />
          </a>
        </HStack>
        <Flex
          alignItems={'center'}
          w="full"
          justifyContent={'space-between'}
          mr="4rem"
        >
          <Logo />
        </Flex>
      </HStack>
    </Container>
  );
};

export default Navbar;
