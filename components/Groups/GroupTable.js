import {
  Box,
  Flex,
  Text,
  useToast,
  VStack,
  Image,
  HStack,
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

const GroupTable = (props) => {
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
      // description: "We've created your account for you.",
      status: "success",
      duration: 800,
      isClosable: true,
    });
  };

  return (
    <VStack justifyContent="center" p="20px">
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
                  bg={snapshot.isDraggingOver ? "gray.200" : "white"}
                  p="4px"
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
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              userSelect="none"
                              margin="6px 15px"
                              borderRadius="4px"
                              px="5px"
                              py="2px"
                              bg={
                                !snapshot.isDragging
                                  ? item.index <= 1
                                    ? "green.50"
                                    : ""
                                  : "yellow.200"
                              }
                              gap={5}
                            >
                              <Text>
                                {item.index === 0
                                  ? "1º"
                                  : item.index === 1
                                  ? "2º"
                                  : item.index === 2
                                  ? "3º"
                                  : "4º"}
                              </Text>
                              <Flex
                                w="45px"
                                bg="gray.700"
                                h="45px"
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
      <MyButton
        color1={"#0BFA1B"}
        color2={"green.200"}
        color3={"green.300"}
        onClick={oitavasHandler}
      >
        Confirm
      </MyButton>
    </VStack>
  );
};

export default GroupTable;
