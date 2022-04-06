import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CupState } from "../../context/Context";
import { DragDropContext, Droppable, Draggable } from "@react-forked/dnd";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  const column = columns[source.droppableId];
  const copiedItems = [...column.items];
  const [removed] = copiedItems.splice(source.index, 1);
  copiedItems.splice(destination.index, 0, removed);
  setColumns({
    ...columns,
    [source.droppableId]: {
      ...column,
      items: copiedItems,
    },
  });
};

const GroupTable = () => {
  const { state } = CupState();
  const filteredList = state.groupState.filter(
    (country) => country.group === state.group
  );

  const [columns, setColumns] = useState({
    [state.group]: {
      name: `Group ${state.group}`,
      items: filteredList,
    },
  });

  useEffect(() => {
    setColumns({
      [state.group]: {
        name: `Group ${state.group}`,
        items: filteredList,
      },
    });
  }, [state.group]);

  // const columns = {
  //   [state.group]: {
  //     name: `Group ${state.group}`,
  //     items: filteredList,
  //   },
  // };

  return (
    <Flex justifyContent="center" h="600px" bg="red">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <Droppable droppableId={state.group} key={state.group}>
          {(provided, snapshot) => {
            return (
              <Box
                {...provided.droppableProps}
                ref={provided.innerRef}
                bg={snapshot.isDraggingOver ? "blue" : "green"}
                p="4px"
                width="1000px"
                minH="100px"
              >
                {columns[state.group]?.items.map((item, index) => {
                  return (
                    <Draggable
                      key={item.name}
                      draggableId={item.name}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            userSelect="none"
                            minxH="50px"
                            margin="0 0 8px 0"
                            bg={
                              snapshot.isDragging ? "yellow.300" : "yellow.700"
                            }
                            color="white"
                          >
                            {item.name}
                          </Box>
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
    </Flex>
  );
};

export default GroupTable;
