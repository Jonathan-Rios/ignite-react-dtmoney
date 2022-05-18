import { Container } from "./styles";
import Modal from "react-modal";

type NewTransactionsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionsModal({
  isOpen,
  onRequestClose,
}: NewTransactionsModalProps) {
  return (
    <Container>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Cadastra transação</h2>
      </Modal>
    </Container>
  );
}
