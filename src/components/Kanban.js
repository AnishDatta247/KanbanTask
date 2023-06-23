import React, { useEffect } from "react";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import data from "../data.json";
import { update } from "lodash";

const Kanban = (event) => {
  const queryAttr = "data-rbd-drag-handle-draggable-id";
  const [placeholderProps, setPlaceholderProps] = useState({});
  const [todo, setTodo] = useState(data.filter((task) => task.status == 0));
  const [inprogress, setInprogress] = useState(
    data.filter((task) => task.status == 1)
  );
  const [complete, setComplete] = useState(
    data.filter((task) => task.status == 2)
  );
  console.log(todo, inprogress, complete);

  const getDraggedDom = (draggableId) => {
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);

    return draggedDOM;
  };

  const getDroppedDom = (droppableId) => {
    const domQuery = `[${"data-rbd-droppable-id"}='${droppableId}']`;
    console.log(domQuery);
    const droppedDOM = document.querySelector(domQuery);
    return droppedDOM;
  };

  const handleDragStart = (event) => {
    const draggedDOM = getDraggedDom(event.draggableId);
    // draggedDOM.style.transition = "0.5s all ease";
    // draggedDOM.style.rotate = "10deg";
    // draggedDOM.style.translateY={}

    if (!draggedDOM) {
      return;
    }

    const { clientHeight, clientWidth } = draggedDOM;
    const sourceIndex = event.source.index;
    var clientY =
      -8 +
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).marginTop) +
      [...draggedDOM.parentNode.children]
        .slice(0, sourceIndex)
        .reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom + 8;
        }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      ),
    });
  };

  const handleDragEnd = (result) => {
    setPlaceholderProps({});
    const { destination, source, draggableId } = result;

    const draggedDOM = getDraggedDom(draggableId);
    // draggedDOM.style.transition = "0.5s all ease";
    // draggedDOM.style.rotate = "0";

    if (!destination) return;

    if (source.droppableId == destination.droppableId) {
      let arr;
      if (source.droppableId == 3) arr = complete;
      else if (source.droppableId == 2) arr = inprogress;
      else arr = todo;
      let [card] = arr.splice(source.index, 1);
      arr.splice(destination.index, 0, card);
      if (destination.droppableId == 3) setComplete(arr);
      else if (destination.droppableId == 2) {
        setInprogress(arr);
      } else setTodo(arr);
      return;
    }

    let arr1;
    if (source.droppableId == 3) arr1 = complete;
    else if (source.droppableId == 2) arr1 = inprogress;
    else arr1 = todo;
    let [card] = arr1.splice(source.index, 1);
    card.status = destination.droppableId - 1;
    let arr2;
    if (destination.droppableId == 3) arr2 = complete;
    else if (destination.droppableId == 2) arr2 = inprogress;
    else arr2 = todo;
    arr2.splice(destination.index, 0, card);
    console.log("prev", arr1);
    console.log("next", arr2);
    if (source.droppableId == 3) setComplete(arr1);
    else if (source.droppableId == 2) {
      setInprogress(arr1);
    } else setTodo(arr1);
    if (destination.droppableId == 3) setComplete(arr2);
    else if (destination.droppableId == 2) {
      setInprogress(arr2);
    } else setTodo(arr2);
  };

  const handleDragUpdate = (event) => {
    if (!event.destination) {
      return;
    }

    const draggedDOM = getDraggedDom(event.draggableId);
    // draggedDOM.style.transition = "0.5s all ease";
    // draggedDOM.style.rotate = "10deg";

    if (!draggedDOM) {
      return;
    }

    const { clientHeight, clientWidth } = draggedDOM;
    const destinationIndex = event.destination.index;
    const sourceIndex = event.source.index;

    if (!draggedDOM.parentNode) return;

    const childrenArray = [...draggedDOM.parentNode.children];
    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);

    let updatedArray;
    if (event.destination.droppableId == event.source.droppableId) {
      updatedArray = [
        ...childrenArray.slice(0, destinationIndex),
        movedItem,
        ...childrenArray.slice(destinationIndex + 1),
      ];
    } else {
      updatedArray = [...getDroppedDom(event.destination.droppableId).children];
      updatedArray = [
        ...updatedArray.slice(0, destinationIndex),
        movedItem,
        ...childrenArray.slice(destinationIndex + 1),
      ];
    }

    var clientY =
      8 +
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr);
        const marginBottom = parseFloat(style.marginBottom);
        return total + curr.clientHeight + marginBottom + 8;
      }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      ),
    });
  };

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragUpdate={handleDragUpdate}
    >
      <div className="flex flex-row flex-nowrap gap-4">
        <Column
          placeholderProps={placeholderProps}
          title={"To Do"}
          tasks={todo}
          id={"1"}
        />
        <Column
          placeholderProps={placeholderProps}
          title={"On Progress"}
          tasks={inprogress}
          id={"2"}
        />
        <Column
          placeholderProps={placeholderProps}
          title={"Completed"}
          tasks={complete}
          id={"3"}
        />
      </div>
    </DragDropContext>
  );
};

export default Kanban;
