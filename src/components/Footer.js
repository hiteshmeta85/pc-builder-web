import {Box, Button, Divider, Stack, Text} from "@chakra-ui/react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <Box bg='gray.50'>
            <Box as="footer" maxW='1360px' mx='auto'>
                <Stack
                    spacing="8"
                    direction={{base: 'column', md: 'row'}}
                    justify="space-between"
                    py={{base: '12', md: '16'}}
                    px={{base: '1rem', md: '2rem'}}
                >
                    <Stack align="start">
                        <Logo/>
                        <Text color='purple.500' fontWeight='medium'>Build your dream PC today.</Text>
                    </Stack>
                    <Stack
                        direction={{base: 'column-reverse', md: 'column', lg: 'row'}}
                        spacing={{base: '12', md: '8'}}
                    >
                        <Stack direction="row" spacing="8">
                            <Stack spacing="4" minW="36" flex="1">
                                <Text fontWeight="semibold"  color='purple.500'>
                                    Product
                                </Text>
                                <Stack spacing="3" shouldWrapChildren>
                                    <Button variant="link" fontWeight='medium' _focus={{boxShadow: 'none'}}
                                    >How it works</Button>
                                    <Button variant="link" fontWeight='medium' _focus={{boxShadow: 'none'}}
                                          >Pricing</Button>
                                    <Button variant="link" fontWeight='medium' _focus={{boxShadow: 'none'}}
                                    >Use Cases</Button>
                                </Stack>
                            </Stack>
                            <Stack spacing="4" minW="36" flex="1">
                                <Text fontWeight="semibold" color='purple.500'>
                                    Legal
                                </Text>
                                <Stack spacing="3" shouldWrapChildren>
                                    <Button variant="link" fontWeight='medium' _focus={{boxShadow: 'none'}}
                                    >Privacy</Button>
                                    <Button variant="link" fontWeight='medium' _focus={{boxShadow: 'none'}}
                                    >Terms</Button>
                                    <Button variant="link" fontWeight='medium' _focus={{boxShadow: 'none'}}
                                    >License</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Divider/>
                <Stack
                    pt="8"
                    pb="12"
                    justify="space-between"
                    direction={{base: 'column-reverse', md: 'row'}}
                    align="center"
                    px={{base: '1rem', md: '2rem'}}
                >
                    <Text fontSize="sm" color="subtle">
                        &copy; {new Date().getFullYear()} NZXT, Inc. All rights reserved.
                    </Text>
                </Stack>
            </Box>
        </Box>
    )
}

export default Footer