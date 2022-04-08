import { Box, Flex, Text, Button } from "@chakra-ui/react";
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

const GroupTable = (props) => {
  const { state, dispatch } = CupState();
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
  };

  return (
    <Flex key={props.group} justifyContent="center" h="200px" bg="red">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, dispatch)}
      >
        <Box>
          <Text>{columns[props.group].name} </Text>
          <Button onClick={oitavasHandler}>Confirm</Button>
          <Droppable droppableId={props.group} key={props.group}>
            {(provided, snapshot) => {
              return (
                <Box
                  {...provided.droppableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  bg={snapshot.isDraggingOver ? "blue" : "green"}
                  p="4px"
                  width="1000px"
                  minH="100px"
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
                            <Flex
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              userSelect="none"
                              minxH="50px"
                              margin="0 0 8px 0"
                              bg={
                                snapshot.isDragging
                                  ? "yellow.300"
                                  : "yellow.700"
                              }
                              color="white"
                              gap={5}
                            >
                              <Text>{item.name} </Text>
                              <Text>
                                {item.index === 0
                                  ? "First place"
                                  : item.index === 1
                                  ? "Second place"
                                  : item.index === 2
                                  ? "Third place"
                                  : "Fourth place"}
                              </Text>
                            </Flex>
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
    </Flex>
  );
};

export default GroupTable;
