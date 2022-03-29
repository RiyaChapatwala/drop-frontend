import { Box, Image } from "@chakra-ui/react";
import React from "react";
import splashscreen from "../Images/splashScreen.svg";
import logo from "../Images/logo.svg";

const SplashScreen = () => {
  return (
    <Box width="100%" position="relative">
      <Image
        position="absolute"
        src={splashscreen}
        objectFit="cover"
        alt="Welcome Page Wallpaper"
        width="100%"
        height="100vh"
        backgroundSize="contain"
      />
      <Image
        src={logo}
        boxSize="97px"
        position="absolute"
        top="37%"
        left="36%"
      />
    </Box>
  );
};

export default SplashScreen;
