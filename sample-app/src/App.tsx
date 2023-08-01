import React, { useState } from 'react';
import "./App.css"
import InputFeild from './components/InputFeild';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App:React.FC =()=>{
  //state for todo task:
  const [todo,setTodo]=useState<string >("");

  //storing all the todo task in array 
 const [todos,setTodos]=useState<Todo[]>([]);


  console.log('initialValue', todo);
  console.log('updatedValue', setTodo);
  console.log(todos);
  
  //handle todo on submit::
//prevent default for handiling refresh each time we are submiting form
  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo("");
    }
  };
  console.log(todos);
  
return(
  <div className="app">
    <span className="heading">
      Taskify
    </span>
    <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos}/>
  </div>
);
};

export default App;
