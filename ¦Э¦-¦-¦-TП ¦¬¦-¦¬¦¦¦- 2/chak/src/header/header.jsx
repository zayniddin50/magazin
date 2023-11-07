import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import rasm from "../rasm/logo (2).png";
import { FiSearch } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneMinus } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <div>
      <Container maxW="container.xl">
        <Flex justifyContent={"space-between"}>
          <Flex alignItems={"center"} gap={50} my={5}>
            <Box display={{ lg: "none", base: "block" }}>
              <Box>
                <CiMenuBurger />
              </Box>
            </Box>
            <Box display={{ base: "none", sm: "block" }}>
              <Image maxW={"100%"} src={rasm} />
            </Box>
            <Box display={{ base: "none", xl: "block" }}>
              <Input
                w={430}
                placeholder="Введите номер запчасти или VIN"
                size="lg"
              />
            </Box>
          </Flex>
          <Box display={"flex"} alignItems={"center"} gap={30}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Box>
                <CiLocationOn />
              </Box>
              <Box display={{ base: "none", xl: "block" }}>
                <Text>Санкт-Петербург</Text>
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Box>
                <BsTelephoneMinus />
              </Box>
              <Box display={{ base: "none", xl: "block" }}>
                <Heading size={"sm"}>+7 (347) 229-46-45 </Heading>
              </Box>
            </Box>
            <Flex align={"center"}>
              <Box>
                <AiOutlineUser />
              </Box>
              <Box display={{ base: "none", xl: "block" }}>
                <Text as={"p"}>Вход / Регистрация</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={10}
          my={3}
        >
          <Flex alignItems={"center"} gap={10}>
            <Button colorScheme="facebook">Все категории</Button>
            <Box display={{ base: "none", xl: "block" }}>
              <Text fontSize={"9px"} as={"p"}>
                Запчасти для ТО
              </Text>
            </Box>
            <Box display={{ base: "none", xl: "block" }}>
              <Text as={"span"}>Автомасла</Text>
            </Box>
            <Box display={{ base: "none", xl: "block" }}>
              <Button w={160} h={8} colorScheme="gray">
                Gray
              </Button>
            </Box>
            <Box display={{ base: "none", xl: "block" }}>
              <Text fontSize={"9px"} as={"p"}>
                Неоригинальные запчасти
              </Text>
            </Box>
            <Box display={{ base: "none", xl: "block" }}>
              <Text as={"p"}>Лампочки</Text>
            </Box>
            <Box display={{ base: "none", xl: "block" }}>
              <Text as={"p"}>Аккумуляторы</Text>
            </Box>
          </Flex>
          <Flex>
            <Box display={{ base: "none", xl: "block" }}>
              <Button w={160} h={8} colorScheme="gray">
                Корзина
              </Button>
            </Box>
            <Box display={{ base: "block", xl: "none" }}>
              <Input w="100%" placeholder="Введите номер запчасти или VIN" />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default Header;
