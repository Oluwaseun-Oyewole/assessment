import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export type ModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
} & React.PropsWithChildren;

const ModalComponent: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          navigate(".");
        }}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalComponent;
