import React from "react";
import { Flex } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "react-spring-bottom-sheet/dist/style.css";
import Routers from "./Routers/index";

const App = () => {
  return (
    <Flex
      w="100%"
      boxSizing="border-box"
      height={["100%", "100vh"]}
      justify="center"
      align="center"
    >
      <Flex
        w={["100%", "100%", "50%", "40%", "30%"]}
        // shadow="lg"
        height={["80vh", "100vh"]}
        // height="100vh"
      >
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </Flex>
    </Flex>
  );
};

export default App;
