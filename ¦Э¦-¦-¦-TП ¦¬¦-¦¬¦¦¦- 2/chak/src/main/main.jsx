import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import Rasm1 from "../rasm/image 85.png";
import Rasm2 from "../rasm/image 86.png";

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Container maxW="container.xl">
      <div>
        <Slider {...settings}>
          <Box
            backgroundImage={Rasm1}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            w={"100%"}
            borderRadius={15}
          >
            <Flex justify={"space-between"} align={"center"}>
              <Box display={"flex"} flexDirection={"column"} gap={10} px={10}>
                <Text fontSize="xs" as="span" color="white">
                  Оригинальные автомасла cо скидкой 15% ₽
                </Text>
                <Box>
                  <Text color="white" fontSize="xs" as="p">
                    Акция действует с 1 по 30 июня 2021
                  </Text>
                </Box>
              </Box>
              <Box>
                <Image maxW="100%" src={Rasm2} />
              </Box>
            </Flex>
          </Box>
          <Box
            backgroundImage={Rasm1}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            w={"100%"}
            borderRadius={15}
          >
            <Flex justify={"space-between"} align={"center"}>
              <Box display={"flex"} flexDirection={"column"} gap={10} px={10}>
                <Text fontSize="xs" as="span" color="white">
                  Оригинальные автомасла cо скидкой 15% ₽
                </Text>
                <Box>
                  <Text color="white" fontSize="xs" as="p">
                    Акция действует с 1 по 30 июня 2021
                  </Text>
                </Box>
              </Box>
              <Box>
                <Image src={Rasm2} />
              </Box>
            </Flex>
          </Box>
          <Box
            backgroundImage={Rasm1}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            w={"100%"}
            borderRadius={15}
          >
            <Flex justify={"space-between"} align={"center"}>
              <Box display={"flex"} flexDirection={"column"} gap={10} px={10}>
                <Text fontSize="xs" as="span" color="white">
                  Оригинальные автомасла cо скидкой 15% ₽
                </Text>
                <Box>
                  <Text color="white" fontSize="xs" as="p">
                    Акция действует с 1 по 30 июня 2021
                  </Text>
                </Box>
              </Box>
              <Box>
                <Image src={Rasm2} />
              </Box>
            </Flex>
          </Box>
          <Box
            backgroundImage={Rasm1}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            w={"100%"}
            borderRadius={15}
          >
            <Flex justify={"space-between"} align={"center"}>
              <Box display={"flex"} flexDirection={"column"} gap={10} px={10}>
                <Text fontSize="xs" as="span" color="white">
                  Оригинальные автомасла cо скидкой 15% ₽
                </Text>
                <Box>
                  <Text color="white" fontSize="xs" as="p">
                    Акция действует с 1 по 30 июня 2021
                  </Text>
                </Box>
              </Box>
              <Box>
                <Image src={Rasm2} />
              </Box>
            </Flex>
          </Box>
        </Slider>
      </div>
    </Container>
  );
};

export default Main;
