import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  Avatar,
  Heading,
  FormControl,
  Select,
  Input,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuthContext } from "../../contexts/authContext"
import { motion } from "framer-motion"
import { UpdateUserForm } from "../../validations/user"

const ModalProfile = () => {
  const [field, setField] = useState("")
  const { user, updateUser } = useAuthContext()

  const {
    register,
    handleSubmit,
    reset,
    unregister,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UpdateUserForm),
  })

  const getPlaceHolder = (field: string): string => {
    const placeHolders: {
      [key: string]: string
    } = {
      fullName: "seu novo nome.",
      email: "seu novo email.",
      phoneNumber: "seu novo telefone.",
      password: "sua nova senha.",
    }
    return `Digite ${placeHolders[field]}`
  }

  const toggleField = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const previousField = field
    unregister(previousField)
    setField(event.target.value)
  }

  return (
    <ModalContent mx="16px">
      <ModalHeader>Meu Perfil</ModalHeader>
      <ModalCloseButton />
      <ModalBody
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="16px"
      >
        <Stack>
          <Avatar name={user?.fullName} />
        </Stack>
        <Heading>{user?.fullName}</Heading>

        <FormControl
          onSubmit={handleSubmit((data) => updateUser(data, reset))}
          as={motion.form}
          display="flex"
          flexDir="column"
          gap="8px"
        >
          <Select
            placeholder="Deseja atualizar alguma informação?"
            onChange={(e) => toggleField(e)}
          >
            <option value="fullName">Nome</option>
            <option value="email">Email</option>
            <option value="phoneNumber">Telefone</option>
            <option value="password">Senha</option>
          </Select>
          {field && (
            <>
              <Input
                type={field === "password" ? "password" : "text"}
                placeholder={getPlaceHolder(field)}
                {...register(`${field}`)}
              />
              <Button type="submit">Atualizar Informações</Button>
            </>
          )}
        </FormControl>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalProfile
