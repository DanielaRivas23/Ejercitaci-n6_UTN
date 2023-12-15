// Registro
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Networks from './Networks';
import Form from './Form';

const Registro = () => {
  return (
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        alignItems='center'

        maxWidth='130vh'
        p={8}
        mx='auto'
        bgGradient='linear(to-b, brand.primary, brand.secondary)'
      >
        <Box flex={{ base: 1, lg: 1 }} borderRight={{ lg: '1px solid rgb(255 255 255 / 20%)' }} p={10}>
          <Form />
        </Box>
        <Box flex={{ base: 1, lg: 1 }} p={10}>
          <Box border='15px solid #ffffff0f'>
            <Box border='1px solid white' p={4}>
              <Box border='1px solid rgb(255 255 255 / 20%)'>
                <Networks />
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
  );
};

export default Registro;
