import {
  Box,
  Flex,
  Text,
  useToast,
  Image,
  HStack,
  useColorModeValue,
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
  <Box h="100%">
    {["1º", "2º", "3º", "4º"].map((position, index) => (
      <Flex
        key={index}
        h="60px"
        my="18px"
        justifyContent="center"
        alignItems="center"
      >
        <Text>{position}</Text>
      </Flex>
    ))}
  </Box>
);

const _GroupTable = (props) => {
  const bg = useColorModeValue("white", "gray.700");
  const bgDragingOver = useColorModeValue("gray.200", "gray.500");
  const bgTopTwo = useColorModeValue("green", "green.200");
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
    <Box p="16px">
      <Text fontSize={["32px"]}> Group {props.group} </Text>
      <HStack justifyContent="center">
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
                  bg={snapshot.isDraggingOver ? bgDragingOver : bg}
                  width="100%"
                  p="4px"
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
                              //   bg={
                              //     !snapshot.isDragging
                              //       ? item.index <= 1
                              //         ? bgTopTwo
                              //         : ""
                              //       : "yellow.200"
                              //   }
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
                              >
                                <Image
                                  objectFit="cover"
                                  alt="country flag"
                                  src={item.flag ? item.flag : ""}
                                />
                              </Flex>
                              <Text
                                color={item.index <= 1 ? "green" : ""}
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
        >
          <Text fontWeight="500" fontSize="32px" color="white">
            Confirm
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default _GroupTable;
