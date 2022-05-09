import { Box, Image, Spinner } from "@chakra-ui/react";
import React from "react";
import splashscreen from "../Images/splashScreen.svg";
import logo from "../Images/drop.svg";

const SplashScreen = ({ loading }) => {
  return (
    <Box width="100%" position="relative">
      <Image
        src={splashscreen}
        objectFit="cover"
        alt="Welcome Page Wallpaper"
        width="100%"
        height="100vh"
        backgroundSize="contain"
      />
      <Image
        position="absolute"
        src={logo}
        objectFit="cover"
        alt="Welcome Page Wallpaper"
        top={0}
        bottom={0}
        my="auto"
        left={0}
        right={0}
        mx="auto"
        boxSize={"98px"}
        backgroundSize="contain"
      />
      {loading && (
        <Spinner
          color="white"
          position={"absolute"}
          left={0}
          right={0}
          mx="auto"
          top={"60%"}
          my="auto"
        />
      )}
    </Box>
  );
};

export default SplashScreen;
