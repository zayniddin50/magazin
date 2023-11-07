import React from "react";
import { data1 } from "./center1";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
} from "@chakra-ui/react";

function Center() {
  return (
    <div>
      <Container maxW="container.xl">
        <Grid
          gridTemplateColumns={{
            base: "auto",
            sm: "auto auto",
            xl: "auto auto auto",
            "2xl": "auto auto auto auto",
          }}
          justifyContent={"center"}
          gap={5}
          my={10}
        >
          {data1.map((karta) => {
            return (
              <Flex
                align={"center"}
                boxShadow={" 0px 0px 76px -5px rgb(225, 233, 239);"}
                h={250}
              >
                <Box p={5}>
                  <Heading size={10}>{karta.text}</Heading>
                  <Button color={"white"} bg={"blue.500"}>
                    Перейти
                  </Button>
                </Box>
                <Box>
                  <Image src={karta.img} />
                </Box>
              </Flex>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Center;
