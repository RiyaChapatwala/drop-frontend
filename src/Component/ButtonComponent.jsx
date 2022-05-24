import { Button } from "@chakra-ui/react";
import React from "react";
import { blue, font14, font600, poppins } from "../Constant";

const ButtonComponent = ({ name }) => {
  return (
    <Button
      w="100%"
      background={blue}
      borderRadius="8px"
      h="55px"
      fontFamily={poppins}
      fontSize={font14}
      fontWeight={font600}
    >
      <span style={{ color: "white" }}>{name}</span>
    </Button>
  );
};

export default ButtonComponent;
