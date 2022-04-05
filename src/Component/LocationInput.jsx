import { Box, Input, InputGroup, List, ListItem } from "@chakra-ui/react";
import React from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { GOOGLE_API_KEY } from "../Constant";
import { grey } from "../Constant";

const LocationInput = ({ address, setAddress, placeholder }) => {
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: GOOGLE_API_KEY,
    });
  return (
    <InputGroup maxW="100%" position="relative">
      <Input
        _placeholder={{
          color: grey,
          opacity: "0.5",
        }}
        _focus={{
          border: "none",
        }}
        _active={{
          bg: "transparent",
        }}
        _hover={{
          bg: "transperant",
          border: "none",
        }}
        border="none"
        placeholder={placeholder}
        // focusBorderColor="blue.500"
        value={address || ""}
        onChange={(event) => {
          getPlacePredictions({ input: event.target.value });
          setAddress(event.target.value);
        }}
        fontSize="md"
      />

      <Box
        position="absolute"
        top="100%"
        maxH="250px"
        overflowY="scroll"
        bg="white"
        shadow="md"
        zIndex={1000}
      >
        <List spacing={5}>
          {!isPlacePredictionsLoading &&
            placePredictions.map((item, index) => {
              return (
                <ListItem
                  padding="5"
                  key={index}
                  cursor="pointer"
                  _hover={{
                    bg: "blue.400",
                  }}
                  onClick={() => {
                    setAddress(item.description);
                    getPlacePredictions({ input: "" });
                  }}
                >
                  {item.description}
                </ListItem>
              );
            })}
        </List>
      </Box>
    </InputGroup>
  );
};

export default LocationInput;
