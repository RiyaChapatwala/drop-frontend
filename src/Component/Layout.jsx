import { Box, Image } from "@chakra-ui/react";
import React from "react";
import top from "../Images/top.svg";

const Layout = () => {
  return (
    <Box width="100%">
      <Image
        src={top}
        // position="absolute"
        // top={["-100", "-110"]}
        w="100%"
        h={["280px", "250px"]}
      />
    </Box>
  );
};

export default Layout;
