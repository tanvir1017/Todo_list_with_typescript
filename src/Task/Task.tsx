import React from "react";
import { ITask } from "../Interface/types.interface";

interface Props {
  task: ITask;
  completeTodoList(compeleteTaskListName: string): void;
}

const Task = ({ task, completeTodoList }: Props) => {
  return (
    <>
      <div>
        {task.taskName} {task.deadline}
        <span
          onClick={() => completeTodoList(task.taskName)}
          style={{ cursor: "pointer" }}
        >
          {" "}
          X{" "}
        </span>
      </div>
    </>
  );
};

export default Task;
