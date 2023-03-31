import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
import {DragDropContext, DropResult} from "react-beautiful-dnd"

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  
  const onDragEnd = (result:DropResult) => {
    const {source, destination} = result
    if(!destination)return
    if(destination.droppableId === source.droppableId && destination.index)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setCompletedTodos={setCompletedTodos}
        completedTodos={completedTodos}
      />
    </div>
    </DragDropContext>
  );
};

export default App;
