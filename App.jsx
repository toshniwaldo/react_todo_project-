import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';

let count=0;
function App() {

  //const[x,setx]=usestate() , this is just a syntax for varible x , and setx is used to change the varibale
  //the state of todo 
  const [todos,setTodos] =useState([]);

  //for adding new new todos , new task and new time would change 
  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState('');

  //use to update the whole state : previous + current 
  function updatetodos()
  {

    //making new state
    const newtodo=[];
    for(let i=0;i<todos.length;i++)
    {
      newtodo.push(todos[i]);
    }
    newtodo.push({
      id: ++count  , 
      task : newTas,k
      time : newTask
    })

    //update todos as a new state of todos 
    setTodos(newtodo);
  }

  return <div>
        
        {/* {taking user input} */}
        <input id='task' type="text" placeholder="enter task" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <input id='time' type="text" placeholder="enter time" value={newTime} onChange={(e)=>setNewTime(e.target.value)}/>
        
        <button onClick={updatetodos}> add new todo</button>

        {/* {returning all the todos of current state to the front end to see } */}
        {todos.map(function(todo){
         return <Todo id ={todo.id} task={todo.task} time={todo.time}></Todo>
       })}
  </div>
}

//structure of a todo 
function Todo({id,task,time})
{
  return <div>
     <div>{id}</div>
    <div>{task}</div>
    <div>{time}</div>
  </div>
}
export default App
