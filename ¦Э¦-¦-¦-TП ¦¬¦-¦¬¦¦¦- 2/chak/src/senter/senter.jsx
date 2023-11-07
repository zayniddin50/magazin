import React from "react";
import { sent } from "./senter2";
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";

function Senter() {
  return (
    <div>
      <Container maxW="container.xl">
        <Heading size={"lg"}>Рекомендуем</Heading>
        <Grid
          gridTemplateColumns={{
            base: "auto",
            sm: "auto auto",
            xl: "auto auto auto",
            "2xl": "auto auto auto auto",
          }}
          gap={5}
          my={10}
        >
          {sent.map((senter1) => {
            return (
              <Flex
                flexDirection={"column"}
                boxShadow={" 0px 0px 76px -5px rgb(225, 233, 239);"}
                maxW={"100%"}
                align={"center"}
                textAlign={"center"}
              >
                <Box>
                  <Image maxW={"100%"} src={senter1.img3} />
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text>{senter1.te}</Text>
                  <Text as={"p"}>{senter1.tes}</Text>
                  <Text>{senter1.testlar}</Text>
                </Box>
              </Flex>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Senter;
