import {
  Box,
  Flex,
  Text,
  useToast,
  VStack,
  Image,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import { DragDropContext, Droppable, Draggable } from "@react-forked/dnd";
import MyButton from "../MyButton";

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
  <Box h="100%" pt="24px">
    {["1º", "2º", "3º", "4º"].map((position, index) => (
      <Flex key={index} h="45px" justifyContent="center" alignItems="center">
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
      name: `Group ${props.group}`,
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
    <HStack justifyContent="center" p="20px" boxShadow="lg">
      {position}
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, dispatch)}
      >
        <Box w="100%">
          <Text textAlign={"center"}>{columns[props.group].name}</Text>

          <Droppable droppableId={props.group} key={props.group}>
            {(provided, snapshot) => {
              return (
                <Box
                  {...provided.droppableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  bg={snapshot.isDraggingOver ? bgDragingOver : bg}
                  width="100%"
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
                              boxShadow="md"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              userSelect="none"
                              borderRadius="4px"
                              bg={
                                !snapshot.isDragging
                                  ? item.index <= 1
                                    ? bgTopTwo
                                    : ""
                                  : "yellow.200"
                              }
                            >
                              <Flex
                                w="45px"
                                bg="gray.700"
                                h="45px"
                                borderColor="#c9c5c9"
                                borderWidth="1px"
                                borderRadius="50%"
                                overflow="hidden"
                              >
                                <Image
                                  objectFit="cover"
                                  src={item.flag ? item.flag : ""}
                                />
                              </Flex>
                              <Text>{item.name} </Text>
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
        </Box>
      </DragDropContext>
      {/* <MyButton
        color1={"#0BFA1B"}
        color2={"green.200"}
        color3={"green.300"}
        onClick={oitavasHandler}
      >
        Confirm
      </MyButton> */}
    </HStack>
  );
};

export default _GroupTable;
