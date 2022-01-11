import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interface/types.interface";
import Task from "./Task/Task";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const hanldeOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTodoList = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    console.log(todo);
    setTask("");
    setDeadline(0);
  };

  const completeTodoList = (compeleteTaskListName: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName !== compeleteTaskListName;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <div className="header_text">
          <h2>This is a Todo List, Made by typescript</h2>

          <div className="inputHeader">
            <input
              type="text"
              placeholder="Task..."
              onChange={hanldeOnChange}
              name="task"
              value={task}
              className="task"
            />
            <br />
            <input
              className="task"
              type="number"
              onChange={hanldeOnChange}
              name="deadline"
              value={deadline}
              placeholder="Deadline..."
            />
          </div>
          <button onClick={addTodoList}>Add Task</button>
        </div>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, key: number) => {
          return (
            <Task key={key} task={task} completeTodoList={completeTodoList} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
