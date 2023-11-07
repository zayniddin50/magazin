import React from "react";
import { mainc } from "./maincard2";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function Maincard() {
  return (
    <div>
      <Container maxW="container.xl">
        <Heading size={"lg"}>Часто продаваемые</Heading>
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
          {mainc.map((senter2) => {
            return (
              <Flex
                flexDirection={"column"}
                boxShadow={" 0px 0px 76px -5px rgb(225, 233, 239);"}
                maxW={"100%"}
                align={"center"}
                textAlign={"center"}
              >
                <Box>
                  <Image maxW={"100%"} src={senter2.imgm} />
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text>{senter2.te}</Text>
                  <Text as={"p"}>{senter2.tes}</Text>
                  <Text>{senter2.testlar}</Text>
                </Box>
              </Flex>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Maincard;
