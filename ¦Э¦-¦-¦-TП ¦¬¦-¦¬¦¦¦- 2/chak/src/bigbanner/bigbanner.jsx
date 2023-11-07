import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { data } from "./mock";
function Bigbanner() {
  return (
    <Box>
      <Container maxW="container.xl">
        <Grid
          gridTemplateColumns={{
            base: "auto",
            sm: "auto auto",
            xl: "auto auto auto",
            "2xl": "auto auto auto auto",
          }}
          alignItems={"center"}
          boxShadow={" 0px 0px 76px -5px rgb(225, 233, 239);"}
        >
          {data.map((item) => {
            return (
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                textAlign={"center"}
              >
                <Image src={item.img} alt="" />
                <Heading size={"xs"}>{item.text}</Heading>
                <Text fontSize={"2xs"}>{item.tegi}</Text>
                <span>{item.teglar}</span>
              </Flex>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Bigbanner;
