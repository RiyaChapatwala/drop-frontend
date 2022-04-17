import React from "react";
import { Flex } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "react-spring-bottom-sheet/dist/style.css";
import Routers from "./Routers/index";
import { bg } from "./Constant";

const App = () => {
  return (
    <Flex
      w="100%"
      boxSizing="border-box"
      height={["100%", "120vh"]}
      justify="center"
      align="center"
      bg={bg}
    >
      <Flex
        w={["100%", "100%", "50%", "40%", "30%"]}
        // shadow="lg"
        height={["100vh", "120vh"]}
        // height="100vh"
        bg={bg}
      >
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </Flex>
    </Flex>
  );
};

export default App;
