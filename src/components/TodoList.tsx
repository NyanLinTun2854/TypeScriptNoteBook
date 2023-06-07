import React from "react";
import { ObjectType } from "../Modal";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: ObjectType[];
  setTodos: React.Dispatch<React.SetStateAction<ObjectType[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
