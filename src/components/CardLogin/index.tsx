import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuthContext } from "../../contexts/authContext"
import { LoginForm } from "../../validations/auth"
import { ILoginForm } from "../../validations/types"

const CardLogin = () => {
  const { login, toggleCard } = useAuthContext()

  const { register, handleSubmit } = useForm<ILoginForm>({
    resolver: zodResolver(LoginForm),
  })

  return (
    <FormControl
      onSubmit={handleSubmit(login)}
      isRequired
      as={motion.form}
      bg="gray.100"
      p="16px"
      borderRadius="16px"
      display="flex"
      flexDir="column"
      gap="16px"
      w={{ base: "100%", md: "50%" }}
      animate={{ opacity: [0, 1] }}
    >
      <Heading>Login</Heading>
      <FormLabel>Email</FormLabel>
      <Input
        type="text"
        placeholder="Digite seu email."
        {...register("email")}
      />
      <FormLabel>Senha</FormLabel>
      <Input
        type="password"
        placeholder="Digite sua senha."
        {...register("password")}
      />
      <Text>
        Não possui cadastro?{" "}
        <Link color="cyan.600" onClick={() => toggleCard("register")}>
          cadastre-se
        </Link>
      </Text>
      <Button type="submit">Login</Button>
    </FormControl>
  )
}

export default CardLogin
