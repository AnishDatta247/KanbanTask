import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { motion } from "framer-motion";

const Card = ({ task, index }) => {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // initial={{ scale: snapshot.isDragging ? 1 : 1 }}
          // animate={{ scale: snapshot.isDragging ? 1.1 : 1 }}
          // transition={{duration: 0.5}}
          isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          className="ease-linear before:bg-red-200 my-2 flex flex-col p-4 gap-1 bg-white rounded-xl"
          // style={{ backgrounColor: snapshot.isDragging ? "blue" : "white" }}
        >
          <div className="flex justify-between">
            <div
              className={`bg-[${
                task.tag === "Low" && task.status !== 2
                  ? "#f8efe3"
                  : task.tag === "High" && task.status !== 2
                  ? "#fdf1f3"
                  : "#e7f2eb"
              }] rounded-md px-2`}
            >
              <span
                className={`text-[0.75rem] font-medium text-[${
                  task.tag === "Low" && task.status !== 2
                    ? "#D58D49"
                    : task.tag === "High" && task.status !== 2
                    ? "#D8727D"
                    : "#68B266"
                }] `}
              >
                {task.status === 2 ? "Completed" : task.tag}
              </span>
            </div>
            <span className="text-[#0D062D] font-extra-bold tracking-tighter">
              ...
            </span>
          </div>
          <span className="text-[1.125rem] text-[#0D062D] font-semibold">
            {task.title}
          </span>
          {task.desc && (
            <span className="text-[#787486] text-[0.75rem]">{task.desc}</span>
          )}
          {task.images && (
            <div className="flex justify-between gap-2">
              {task.images.map((img) => (
                <img src={"images/" + img + ".png"} className="w-full" />
              ))}
            </div>
          )}
          <div className="mt-7 flex justify-between">
            <div class="flex -space-x-2">
              {task.avatars.map((img) => (
                <img src={"images/" + img + ".png"} width={25} />
              ))}
            </div>
            <div className="flex items-center gap-[0.31rem]">
              <img src="images/message.svg" className="w-4" />
              <div className="flex text-[#787486] text-[0.75rem]">
                <span className="mr-1">{task.comments}</span>
                <span>comments</span>
              </div>
              <img className="ml-[0.57rem]" src="images/folder-2.svg" />
              <div className="flex text-[#787486] text-[0.75rem]">
                <span className="mr-1">{task.files}</span>
                <span>files</span>
              </div>
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
