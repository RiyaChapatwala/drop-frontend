import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  // FacebookShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const Share = ({ eventName, imageUrl, setShare, shareUrl }) => {
  const content = "invitation";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setShare(false);
      }, 1500);
    }
  }, [copied, setShare]);

  return (
    <Box>
      <Flex mt="3" w="90%" mx="auto">
        <Image w="20%" h="20%" mr="3" src={imageUrl} />
        <Text fontFamily="Open Sans" fontWeight="600" fontSize="18px">
          {eventName}
        </Text>
      </Flex>
      <Divider my={["5", "4"]} color="#222222" />
      <Grid templateColumns="repeat(4, 1fr)" gap={3} w="90%" mx="auto">
        <GridItem w="100%">
          <Box>
            <FacebookShareButton url={shareUrl} quote={content}>
              <FacebookIcon size={50} style={{ borderRadius: "10px" }} />
            </FacebookShareButton>
            <Text fontSize="12px">Facebook</Text>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box>
            <FacebookMessengerShareButton
              url={shareUrl}
              appId="521270401588372"
            >
              <FacebookMessengerIcon
                size={50}
                style={{ borderRadius: "10px" }}
              />
            </FacebookMessengerShareButton>
          </Box>
          <Text fontSize="12px">Messanger</Text>
        </GridItem>
        <GridItem w="100%">
          <Box>
            <TwitterShareButton url={shareUrl} title={content}>
              <TwitterIcon size={50} style={{ borderRadius: "10px" }} />
            </TwitterShareButton>
          </Box>
          <Text fontSize="12px">Twitter</Text>
        </GridItem>
        <GridItem w="100%">
          <Box>
            <TelegramShareButton url={shareUrl} title={content}>
              <TelegramIcon size={50} style={{ borderRadius: "10px" }} />
            </TelegramShareButton>
          </Box>
          <Text fontSize="12px">Telegram</Text>
        </GridItem>
        <GridItem w="100%">
          <Box>
            <WhatsappShareButton url={shareUrl} title={content} separator=": ">
              <WhatsappIcon size={50} style={{ borderRadius: "10px" }} />
            </WhatsappShareButton>
          </Box>
          <Text fontSize="12px">Whatsapp</Text>
        </GridItem>
        <GridItem w="100%">
          <Box>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={50} style={{ borderRadius: "10px" }} />
            </LinkedinShareButton>
          </Box>
          <Text fontSize="12px">LinkedIn</Text>
        </GridItem>
        <GridItem w="100%">
          <Box>
            <EmailShareButton url={shareUrl} subject={content} body="body">
              <EmailIcon size={50} style={{ borderRadius: "10px" }} />
            </EmailShareButton>
          </Box>
          <Text fontSize="12px">Email</Text>
        </GridItem>
        <GridItem w="100%">
          <Box>
            <InstapaperShareButton url={shareUrl} title={content}>
              <InstapaperIcon size={50} style={{ borderRadius: "10px" }} />
            </InstapaperShareButton>
          </Box>
          <Text fontSize="12px">Instagram</Text>
        </GridItem>
      </Grid>
      <Divider my={["5", "3"]} color="#222222" />
      <Box
        w="90%"
        mx="auto"
        border="1px solid #DDDDDD"
        p={["3", "2"]}
        background="#DDDDDD"
        borderRadius={["12px", "8px"]}
      >
        <Flex justifyContent="space-between" alignItems="center">
          {copied ? (
            <Text fontSize={["18px", "15px"]} color="#696969">
              Copied
            </Text>
          ) : (
            <Text fontSize={["18px", "15px"]} color="#696969">
              Copy
            </Text>
          )}
          <MdContentCopy
            onClick={(e) => {
              e.stopPropagation();
              setCopied(true);
              navigator.clipboard.writeText(shareUrl);
            }}
            size={20}
            color="#696969"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Share;
