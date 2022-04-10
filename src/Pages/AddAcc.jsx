import { Button } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddAcc = () => {
  const history = useHistory();
  return (
    <Button
      onClick={() => history.push("/addSocietyAcc", { Acc: false, Soc: false })}
    >
      Check
    </Button>
  );
};

export default AddAcc;
