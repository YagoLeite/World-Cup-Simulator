import {
  Box,
  Flex,
  Text,
  useToast,
  Image,
  HStack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import { DragDropContext, Droppable, Draggable } from "@react-forked/dnd";

const onDragEnd = (result, columns, dispatch) => {
  if (!result.destination) return;
  const { source, destination } = result;
  const column = columns[source.droppableId];
  const copiedItems = [...column.items];
  const [removed] = copiedItems.splice(source.index, 1);
  copiedItems.splice(destination.index, 0, removed);
  dispatch({ type: "SCORE-UPDATE", value: copiedItems });
};

const position = (
  <VStack justifyContent="center" h="100%">
    {["1º", "2º", "3º", "4º"].map((position, index) => (
      <Flex
        key={index}
        h="85px"
        borderColor="rgb(255, 176, 74)"
        borderBottomWidth={index <= 1 ? "5px" : ""}
        justifyContent="center"
        alignItems="center"
      >
        {position}
      </Flex>
    ))}
  </VStack>
);

const _GroupTable = (props) => {
  const { state, dispatch } = CupState();
  const toast = useToast();
  const filteredList = state.groupState
    .filter((country) => country.group === props.group)
    .sort((a, b) => a.index - b.index);

  const columns = {
    [props.group]: {
      items: filteredList,
    },
  };

  const oitavasHandler = () => {
    dispatch({ type: "OITAVAS-SELECTION", value: props.group });
    toast({
      title: "Group Confirmed",
      status: "success",
      duration: 800,
      isClosable: true,
    });
  };

  return (
    <Box bg="gray.700" py="16px">
      <Text fontSize={["32px"]}> Group {props.group} </Text>
      <HStack>
        {position}
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, dispatch)}
        >
          <Droppable droppableId={props.group} key={props.group}>
            {(provided, snapshot) => {
              return (
                <Box
                  {...provided.droppableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  bg={snapshot.isDraggingOver ? "gray.600" : "gray.700"}
                  width="100%"
                  px="4px"
                >
                  {filteredList.map((item, index) => {
                    return (
                      <Draggable
                        key={item.name}
                        draggableId={item.name}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <HStack
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              userSelect="none"
                              px="8px"
                              py="5px"
                              borderRadius="2px"
                              borderBottomWidth={item.index <= 1 ? "5px" : ""}
                              borderColor="rgb(255, 176, 74)"
                              bg={
                                !snapshot.isDragging
                                  ? item.index <= 1
                                    ? "#ededed21"
                                    : ""
                                  : "yellow.200"
                              }
                              opacity={
                                !snapshot.isDragging
                                  ? item.index <= 1
                                    ? 1
                                    : 0.5
                                  : 1
                              }
                              my="18px"
                              gap={["24px"]}
                            >
                              <Flex
                                w="60px"
                                h="60px"
                                bg="gray.700"
                                borderColor="#c9c5c9"
                                borderWidth="1px"
                                borderRadius="50%"
                                overflow="hidden"
                                alt="country flag"
                              >
                                {item.flag && (
                                  <Image
                                    objectFit="cover"
                                    alt="country flag"
                                    src={item.flag}
                                  />
                                )}
                              </Flex>
                              <Text
                                // color={item.index <= 1 ? "green" : ""}
                                fontSize={["24px"]}
                              >
                                {item.name}
                              </Text>
                            </HStack>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </Box>
              );
            }}
          </Droppable>
        </DragDropContext>
      </HStack>
      <Flex w="100%" justifyContent="flex-end">
        <Flex
          justify="center"
          alignItems="center"
          bg="#E36262"
          cursor="pointer"
          onClick={oitavasHandler}
          w={["100px", "140px"]}
          _hover={{ bg: "rgba(184,28,28,1)" }}
        >
          <Text
            pb="2px"
            fontWeight="400"
            fontSize={["24px", "32px"]}
            color="white"
          >
            Confirm
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default _GroupTable;
