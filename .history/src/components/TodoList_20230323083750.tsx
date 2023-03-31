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

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="todosList">
        {(provider) => (
          <div className="todos" ref={provider.innerRef} {...provider.droppableProps}>
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
      <Droppable>
        {
          () => (

          )
        }
      
      </Droppable>
    </div>
  );
};

export default TodoList;
