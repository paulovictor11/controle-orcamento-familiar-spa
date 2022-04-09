import type { NextPage } from 'next';
import {
    Button,
    Flex,
    Grid,
    Heading,
    Input,
    Link as ChakraLink,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Divider from '../src/components/Divider';
import Head from 'next/head';
import Link from 'next/link';
import { BsGoogle } from 'react-icons/bs';

const SignIn: NextPage = () => {
    return (
        <>
            <Head>
                <title>Controlador Orçamentário Familiar - Sign In</title>
            </Head>
            <Grid
                as="main"
                height="100vh"
                templateColumns="1fr 480px 480px 1fr"
                templateRows="1fr 480px 1fr"
                templateAreas="
                    '. . . .'
                    '. logo form .'
                    '. . . .'
                "
                justifyContent="center"
                alignItems="center">
                <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
                    <Heading size="2xl" lineHeight="shorter">
                        Faça seu login na plataforma
                    </Heading>
                </Flex>

                <Flex
                    gridArea="form"
                    height="100%"
                    backgroundColor={useColorModeValue('gray.100', 'gray.700')}
                    borderRadius="md"
                    flexDir="column"
                    alignItems="stretch"
                    padding={16}>
                    <Input
                        height="50px"
                        backgroundColor={useColorModeValue('white', 'gray.800')}
                        focusBorderColor="purple.500"
                        borderRadius="sm"
                        placeholder="Email"
                    />

                    <Input
                        height="50px"
                        backgroundColor={useColorModeValue('white', 'gray.800')}
                        focusBorderColor="purple.500"
                        borderRadius="sm"
                        placeholder="Senha"
                        marginTop={2}
                    />

                    <ChakraLink
                        alignSelf="flex-start"
                        marginTop={2}
                        fontSize="sm"
                        color="purple.600"
                        fontWeight="bold"
                        _hover={{ color: 'purple.500' }}>
                        Esqueci minha senha
                    </ChakraLink>

                    <Link href="/" passHref>
                        <Button
                            as={'a'}
                            marginTop={6}
                            color="white"
                            backgroundColor="purple.500"
                            height="50px"
                            borderRadius="sm"
                            _hover={{ backgroundColor: 'purple.600' }}>
                            Entrar
                        </Button>
                    </Link>

                    <Text
                        textAlign="center"
                        fontSize="sm"
                        color={useColorModeValue('black', 'gray.300')}
                        marginTop={6}>
                        Não tem uma conta?{' '}
                        <Link href="/signup" passHref>
                            <ChakraLink
                                color="purple.600"
                                fontWeight="bold"
                                _hover={{ color: 'purple.500' }}>
                                Registre-se
                            </ChakraLink>
                        </Link>
                    </Text>

                    <Divider />

                    <Flex alignItems="center">
                        <Text fontSize="sm">Ou entre com</Text>
                        <Button
                            height="50px"
                            flex="1"
                            backgroundColor={useColorModeValue(
                                'white',
                                'gray.600'
                            )}
                            marginLeft={6}
                            borderRadius="sm"
                            _hover={{
                                backgroundColor: 'purple.500',
                                color: 'white',
                            }}
                            leftIcon={<BsGoogle />}>
                            Google
                        </Button>
                    </Flex>
                </Flex>
            </Grid>
        </>
    );
};

export default SignIn;
