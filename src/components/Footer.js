import React from "react";
import { Box, Link, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box as="footer" bg='brand.buttonColor' color='brand.letterColor' p={4} mt={8}>

            <Flex flexDirection={{base: 'column-reverse', md: 'row'}} justify='space-around' align='center'>
                <Text mb={0}>&copy; 2023 Todos los derechos reservados</Text>
                <Box>
                    <Link _hover={{ textDecor: 'none', color: 'brand.secondary'}} mx={2} href="#">
                        Política de Privacidad
                    </Link>
                    <Link _hover={{ textDecor: 'none', color: 'brand.secondary'}} mx={2} href="#">
                        Términos de Servicio
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;
