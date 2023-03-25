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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuthContext } from "../../contexts/authContext"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type ILoginData = z.infer<typeof loginSchema>

interface ICardLoginProps {
  toggleCard(card: string): void
}

const CardLogin = ({ toggleCard }: ICardLoginProps) => {
  const { login } = useAuthContext()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  })

  return (
    <FormControl
      onSubmit={handleSubmit(login as SubmitHandler<FieldValues>)}
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
      <Button
        bg="cyan.600"
        borderRadius="8px"
        fontWeight="bold"
        color="gray.100"
        p="16px"
        width="100%"
        _hover={{ bg: "cyan.700" }}
        type="submit"
      >
        Login
      </Button>
    </FormControl>
  )
}

export default CardLogin
