import React from "react";
import { Image } from "@chakra-ui/react";
import { TCharID } from "../typings/maze";
import { getCharImageLink } from "../utils/maze";

type Props = {
  charID: TCharID | null;
};

const Character = ({ charID }: Props) => {
  if (!charID) {
    return null;
  }
  const imageLink = getCharImageLink(charID);
  return <Image src={imageLink} h="100%" />;
};

export default React.memo(Character);
