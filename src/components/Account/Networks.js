// InfoSection.js
import React from "react";
import { Box, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Networks = () => {
    return (
        <Box textAlign='center' mt={8} p={4} color="brand.letterColor">
            <VStack spacing={4}>
                <Text fontSize='1.6rem' fontWeight={300}>
                    Únete a nuestra plataforma para acceder a información y contenido gratuito.
                </Text>
                <Text>
                    Descubre noticias, artículos, tutoriales y más. 
                </Text>
                <Box color='brand.buttonColor'>
                    <Text color="brand.letterColor" fontWeight={700} fontSize='1.2rem'>
                        Siguenos en las redes sociales
                    </Text>
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <Icon as={FaFacebook} boxSize={8} mr={2} _hover={{ color: 'white' }} />
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <Icon as={FaTwitter} boxSize={8} mr={2} _hover={{ color: 'white' }} />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Icon as={FaInstagram} boxSize={8} _hover={{ color: 'white' }} />
                    </Link>
                </Box>
            </VStack>
        </Box>
    );
};

export default Networks;
