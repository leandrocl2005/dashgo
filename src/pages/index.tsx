import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function Home() {
  // ctrl + alt + shift + a (html split atributes)
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center">
      <Flex
        as="form"
        w="100%"
        bg="gray.800"
        p="8"
        flexDir="column"
        borderRadius={8}
        maxWidth={360}>
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="passwrod" label="Password" />
        </Stack>
        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex>
  );
}
