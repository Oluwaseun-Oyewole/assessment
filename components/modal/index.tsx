"use client";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
} & React.PropsWithChildren;

const ModalComponent: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const navigate = useRouter();
  return (
    <Box maxWidth="90%">
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => {
          onClose();
          navigate.replace(`/budget/?tab=1`);
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
