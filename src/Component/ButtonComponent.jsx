import { Button } from "@chakra-ui/react";
import React from "react";
import { blue, font13, font600 } from "../Constant";

const ButtonComponent = ({ name }) => {
  return (
    <Button
      w="100%"
      background={blue}
      borderRadius="8px"
      h="55px"
      fontSize={font13}
      fontWeight={font600}
    >
      <span style={{ color: "white" }}>{name}</span>
    </Button>
  );
};

export default ButtonComponent;
