// Registro
import React from 'react';
import { Box, Heading, VStack, Stack, Checkbox, Link, Button } from '@chakra-ui/react';
import InputField from './InputField';

const Registro = () => {
  return (
    <Box
      display='flex'
      direction='column'
      alignItems='center'
      justifyContent='center'
    //   minHeight='100vh'
      maxWidth='80vh'
      p={8}
      mx='auto'
      bgGradient='linear(to-b, brand.primary, brand.secondary)'
    >
      <VStack spacing={5} align='stretch' width='90%'>
        <Heading as='h1' textAlign='center' fontWeight={700} color='brand.letterColor'>
          Account
        </Heading>
        <Heading as='h2' mb={6} textAlign='center' fontWeight={300} fontSize='1.5rem' color='brand.letterColor'>
          Registro Personal
        </Heading>

        <InputField placeholder='Nombre' type='text' mt={0} />
        <InputField placeholder='Apellido' type='text' />
        <InputField placeholder='Email' type='email' />
        <InputField placeholder='Teléfono' type='tel' />
        <InputField placeholder='Password' type='password' mt={2} />
        <InputField placeholder='Confirmar Password' type='password'>
          Debe coincidir con la contraseña anterior.
        </InputField>

        <Stack color='brand.letterColor' display='flex' direction='row' justify='space-between'>
          <Checkbox colorScheme='green'>Recordar Password</Checkbox>
          <Link _hover={{ textDecor: 'none' }}>Recuperar Contraseña</Link>
        </Stack>

        <Button
          padding='1.6rem'
          borderRadius='none'
          colorScheme='brand'
          bgColor='brand.buttonColor'
          mt={3}
          _hover={{ bgColor: 'brand.hover' }}
        >
          Registrarse
        </Button>
      </VStack>
    </Box>
  );
};

export default Registro;
