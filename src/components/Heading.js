import React from "react";
import { Box, Link } from "@chakra-ui/react";

const Heading = () => {
    return (
            <Box as = 'header'
                display='flex'
                flexDirection={{base: 'column', md: 'row'}}
                justifyContent='center'
                bg='brand.buttonColor' color='brand.letterColor' p={4} textAlign='center' fontSize='1.2rem' mb={8}>

                <Link mx={6} _hover={{ textDecor: 'none', color: 'brand.secondary'}}>Inicio</Link>
                <Link mx={6} _hover={{ textDecor: 'none', color: 'brand.secondary'}}>Servicios</Link>
                <Link mx={6} _hover={{ textDecor: 'none', color: 'brand.secondary'}}>Productos</Link>
                <Link mx={6} _hover={{ textDecor: 'none', color: 'brand.secondary'}}>Sobre Nosotros</Link>
                <Link mx={6} _hover={{ textDecor: 'none', color: 'brand.secondary'}} color='brand.secondary'>Registrarse Gratis</Link>
            </Box>
    );
}

export default Heading;