import React from 'react';
import { Todo } from '../model';
// import { IconName } from "react-icons/di";
type Props={
    todo:Todo;
    todos:Todo[]; 
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props>= ({todo,todos,setTodos}) => {
  return (
    <div className="singletodo">
        <form>
            <span className="text">{todo.todo}</span>
            <span className="edit">
            </span>
        </form>
    </div>
  )
}

export default SingleTodo
