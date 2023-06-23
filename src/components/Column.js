import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import { isEmpty } from "lodash";
// import styled from "styled-components";

const Column = ({ title, tasks, id, placeholderProps }) => {
  console.log(tasks);
  return (
    <div className="min-w-[100%] md:min-w-[50%] lg:min-w-0 column bg-[#F5F5F5] w-full my-4 px-[20px] rounded-xl">
      <div
        className={`py-[20px] flex justify-between border-b-4 border-[${
          title === "To Do"
            ? "#5030E5"
            : title === "On Progress"
            ? "#FFA500"
            : "#8BC48A"
        }]`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-[8px] h-[8px] bg-[${
              title === "To Do"
                ? "#5030E5"
                : title === "On Progress"
                ? "#FFA500"
                : "#8BC48A"
            }] rounded-full`}
          ></div>
          <span className="text-[#0D062D] font-medium">{title}</span>
          <div className="ml-2 flex justify-center items-center w-[20px] h-[20px] bg-[#E0E0E0] p-1 rounded-full">
            <span className="text-[0.75rem] text-[#625F6D]">4</span>
          </div>
        </div>
        {title=="To Do" && <button>
          <img src="images/add-square-2.svg" />
        </button>}
      </div>
      <div className="relative ">
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              className="flex flex-col mt-4 mb-4"
            >
              {tasks.map((task, index) => (
                <Card key={index} index={index} task={task} />
              ))}

              {provided.placeholder}

              {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                <div
                  className="placeholder bg-[#eae9f2] outline-2 rounded-xl outline-dotted outline-[#907cec] absolute"
                  style={{
                    top: placeholderProps.clientY,
                    left: placeholderProps.clientX,
                    height: placeholderProps.clientHeight,
                    width: placeholderProps.clientWidth,
                  }}
                />
              )}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Column;
