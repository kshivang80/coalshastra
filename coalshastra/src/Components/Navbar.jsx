//navbar code


import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { FaStar, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box className='' border="1px solid red" w="90%" margin={"auto"}>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      boxShadow="md"
      w="90%"
      mt="20px"
      m="auto"
      border="1px solid green"
    >
      <Box display={['none', 'block']}>
        <Flex align="center">
          <Text>
            <FaStar style={{ color: 'grey', marginRight: '10px' }} />
          </Text>
          <Text
            mr="3rem"
            color="gray"
          
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            FAV
          </Text>
          <Text
            marginRight="3rem"
            color="gray"
           
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            USAGUJ
          </Text>
          <Text
            marginRight="3rem"
            color="gray"
           
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            WCL
          </Text>
          <Text
            marginRight="3rem"
            color="gray"
           
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            MCL
          </Text>
          <Text
            marginRight="3rem"
            color="gray"
           
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            VIZAGPT
          </Text>
          <Text
            marginRight="3rem"
            color="gray"
           
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            INDOGUJ
          </Text>
          <Text
            marginRight="3rem"
            color="gray"
           
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            NMANGPT
          </Text>
          <Text
            marginRight="3rem"
            color="gray"
           
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            USAUN
          </Text>
          <Text
            marginRight="3rem"
            color="gray"
           
            _hover={{
              color: 'blue',
              textDecoration: 'underline',
            }}
          >
            USAM
          </Text>
          <Text
            marginRight="4rem"
            color="gray"
           
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            ECL
          </Text>
          <Text
            marginRight="4rem"
            color="gray"
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
            _hover={{ color: 'blue', textDecoration: 'underline' }}
          >
            ENNKAPT
          </Text>
        </Flex>
      </Box>

      <Box display={['block', 'none']}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={isMenuOpen ? <FaTimes /> : <FaBars />}
            onClick={handleMenuToggle}
          />
          <MenuList display={isMenuOpen ? 'block' : 'none'}>
            <MenuItem>FAV</MenuItem>
            <MenuItem>USAGUJ</MenuItem>
            <MenuItem>WCL</MenuItem>
            <MenuItem>MCL</MenuItem>
            <MenuItem>VIZAGPT</MenuItem>
            <MenuItem>INDOGUJ</MenuItem>
            <MenuItem>NMANGPT</MenuItem>
            <MenuItem>USAUN</MenuItem>
            <MenuItem>USAM</MenuItem>
            <MenuItem>ECL</MenuItem>
            <MenuItem>ENNKAPT</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
    </Box>
  );
};

export default Navbar;