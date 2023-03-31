import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="todosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
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
        )}
      </Droppable>
      <Droppable droppableId="todosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">
              Completed Tasks
              {completedTodos.map((todo) => (
                <SingleTodo
                  todo={todo}
                  key={todo.id}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                />
              ))}
            </span>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
