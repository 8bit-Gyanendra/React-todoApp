import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import List from './components/List/List';
import TODOI from './Interfaces/TodoUnterface';
import { useEffect } from 'react';

const App = () => {

const [list, setlist] = useState<TODOI[]>([]);
const [todos, setTodos] = useState<TODOI[]>([]);

const addTodo = (todo: string): void => { 
        const data : TODOI = {
            id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
            text: todo,
            completed: false,
        };
  setTodos((prevTodos: TODOI[]): TODOI[] => [...prevTodos,data]); 
  window.alert("ToDo Added!");
}

const [completed, setCompleted] =useState<TODOI[]>([]);
const [done, setDone] = useState<TODOI[]>([]);



const completeTodo = (id: number): void => {

  const currentTodo : any = todos.find((todo: TODOI)  =>
  todo.id === todo.id);

  currentTodo.completed = true;
  setCompleted((prevTodos: TODOI[]): TODOI[] => [...prevTodos, currentTodo]); 
  const updatedTodos:TODOI[] = todos.map(
    (todo:TODOI): TODOI => (todo.id === id ? currentTodo : todo)
    )
  setTodos(updatedTodos)
  window.alert("Done Succesfully")
}

const deleteTodo = (id: number): void => {

  const updatedTodos:TODOI[] = todos.filter(
    (todo:TODOI): any =>  todo.id !== id);
  
  setTodos(updatedTodos)
  
  window.alert("Deleted Succesfully")

  const updatedTodo:TODOI[] = completed.filter(
    (todo:TODOI): any =>  todo.id !== id);
    setCompleted(updatedTodo)
  
}

useEffect(() => {
   setlist(todos)
}, [todos])


const handleComplete = () =>{
  setlist(completed)
} 
const handleAll =()=>{
   setlist(todos); 
}  


  return (
    <div className="App">
       <Header /> 
    <div className="todo-container"> 
        <div className="formsection"> 
        <Form  addTodo = {addTodo}/>
        <List 
        todos={list} 
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        />
        </div>
         
      <div className="row-btn"> 
      <button className="btn" onClick={handleComplete}>Completed</button>
      <button className="btn" onClick={handleAll}>All</button>
      </div>
      </div>
     
    </div>
  );
}

export default App;
