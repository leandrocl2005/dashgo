import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSign: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(revolve => setTimeout(revolve, 2000));
  }

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
        onSubmit={handleSubmit(handleSign)}
        maxWidth={360}>
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")} />
          <Input
            name="password"
            type="password"
            label="Password"
            error={errors.password}
            {...register("password")} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          size="lg"
          isLoading={isSubmitting}
          colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex>
  );
}
