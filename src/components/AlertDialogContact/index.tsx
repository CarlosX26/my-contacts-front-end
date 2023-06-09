import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react"
import { useRef } from "react"
import { useContactContext } from "../../contexts/contactContext"

interface IAlertDialogContactProps {
  isOpen: boolean
  onClose(): void
}

const AlertDialogContact = ({ isOpen, onClose }: IAlertDialogContactProps) => {
  const { deleteContact, contact } = useContactContext()
  const cancelRef = useRef<HTMLButtonElement | null>(null)

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent mx="16px">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Deseja deletar este contato?
          </AlertDialogHeader>

          <AlertDialogFooter>
            <Button variant="outline" ref={cancelRef} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              onClick={() => deleteContact(contact!.id)}
              ml={3}
              variant="alert"
            >
              Confirmar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default AlertDialogContact
