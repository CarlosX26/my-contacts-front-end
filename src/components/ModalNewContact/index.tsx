import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react"
import { useContactContext } from "../../contexts/contactContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { IRegisterContactForm } from "../../validations/types"
import { RegisterContactForm } from "../../validations/contact"

const ModalNewContact = () => {
  const { newContact } = useContactContext()

  const { register, handleSubmit } = useForm<IRegisterContactForm>({
    resolver: zodResolver(RegisterContactForm),
  })
  return (
    <ModalContent mx="16px">
      <ModalHeader>Adicionar Contato</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl
          onSubmit={handleSubmit(newContact)}
          as={motion.form}
          display="flex"
          flexDir="column"
          gap="16px"
        >
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            placeholder="Digite o nome do contato."
            {...register("fullName")}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Digite o email do contato."
            {...register("email")}
          />
          <FormLabel>Telefone</FormLabel>
          <Input
            type="text"
            placeholder="Digite o telefone do contato."
            {...register("phoneNumber")}
          />
          <Button type="submit">Cadastrar contato</Button>
        </FormControl>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalNewContact
