import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import { texts } from "../constants/texts";
import { TGameStateObject, TMazeData } from "../typings/ponyApi";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: TGameStateObject;
  movesCount: number;
};

const GameModal = ({ isOpen, onClose, data, movesCount }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform="uppercase">
            {texts.game.game_over}
          </ModalHeader>
          <ModalBody>
            <Text size="xl">{data["state-result"]}</Text>
            <Text size="xl">{`${texts.game.moves_counter} ${movesCount}`}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              {texts.game.button_new_game}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default React.memo(GameModal);
