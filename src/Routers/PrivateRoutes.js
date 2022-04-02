import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import BottomNavigation from "src/components/BottomNavigation";

const PrivateRoutes = ({ children, ...props }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <Route
      {...props}
      render={({ location }) => {
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: "/?path=login",
                state: {
                  from: location,
                },
              }}
            />
          );
        } else {
          return (
            <Box
              position="relative"
              h={["89.8vh", "100vh"]}
              width="100%"
              bg="linear-gradient(#FFFFFF, #FFFFFF, #ffffff)"
            >
              <Box
                h={["89.8vh", "95vh"]}
                overflowY="scroll"
                className="hideScrollBar"
                zIndex={2}
              >
                {children}
              </Box>
              <BottomNavigation />
            </Box>
          );
          // }
        }
      }}
    />
  );
};
export default PrivateRoutes;
