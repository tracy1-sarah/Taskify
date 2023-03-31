import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}




const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos_heading">
          Active Tasks
          {todos.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </span>
      </div>
      <div className="todos remove">
      <span className="todos_heading">
          Completed Tasks
          {todos.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </span>
      </div>
    </div>
  );
};

export default TodoList;
