/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  font12,
  font16,
  font500,
  font600,
  lightblue,
  lightWhite,
  roboto,
  white,
} from "../Constant";
import { getBusiness } from "../redux/reducers/userSlice";
import Businessservice from "../services/Businessservice";

const Nav = ({ card }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.data.user);

  const [business, setBusiness] = useState({
    name: "",
    imageUrl: "",
    address: "",
    rate: 0,
  });

  useEffect(() => {
    if (!user.language) {
      history.push("/selectLanguage", { from: "language" });
    } else if (!user.name || !user.mobileNo) {
      history.push("/create-profile");
    } else {
      Businessservice.getBusiness()
        .then((response) => {
          dispatch(getBusiness(response.data));
          setBusiness({
            name: response.data.name,
            imageUrl: response.data.imageUrl,
            address: response.data.address,
            rate: response.data.rate,
          });
        })
        .catch(() => {
          history.push("/selectBusiness", { from: "language" });
        });
    }
  }, [dispatch]);

  return (
    <Flex
      alignItems={"center"}
      pt="4"
      px="7"
      h="91px"
      background={lightblue}
      color={white}
    >
      <Flex flex="1">
        <Image
          src={business.imageUrl}
          boxSize="42px"
          objectFit={"cover"}
          border={`1.03px solid ${white}`}
          borderRadius="6px"
        />
        <Flex ml="4" flexDir="column">
          <Text
            textTransform={"capitalize"}
            fontFamily={roboto}
            fontWeight={font600}
            fontSize={font16}
            color={white}
          >
            {business.name}
          </Text>
          <Text
            fontFamily={roboto}
            color={lightWhite}
            fontWeight={font500}
            fontSize={font12}
          >
            {business.address}
          </Text>
        </Flex>
      </Flex>
      {card && (
        <Avatar
          cursor="pointer"
          src={user.imageUrl}
          size="sm"
          onClick={() => history.push("/profile")}
        />
      )}
    </Flex>
  );
};

export default Nav;
