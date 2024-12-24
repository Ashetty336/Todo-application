import { useState,useEffect } from 'react'
import TodoInput from  './components/TodoInput'
import TodoList from  './components/TodoList'

function App() {
const [todos,setTodos]=useState([])
const[toDoValue,setTodoValue]=useState('')

function persist(newList){
  localStorage.setItem('todos',JSON.stringify({todos:newList}))
}

function handleTodos(newTodo){
  const newTodoList=[...todos,newTodo]
  persist(newTodoList)
  setTodos(newTodoList)
}

function handleDeletion(index){
  const newTodoList=todos.filter((todo,todoIndex)=>{
   return todoIndex!=index
  })
  persist(newTodoList)
  setTodos(newTodoList)
}

function handleEdit(index){
const valueTobeEdited=todos[index]
setTodoValue(valueTobeEdited)
handleDeletion(index)
}


useEffect(()=>{
  if(!localStorage)
    return

  let localTodos=localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  localTodos=JSON.parse(localTodos).todos
  setTodos(localTodos)

},[])
  
  return (
    <>
      <TodoInput toDoValue={toDoValue} setTodoValue={setTodoValue} handleTodos={handleTodos}/>
      <TodoList  handleEdit={handleEdit} handleDeletion={handleDeletion} todos={todos} />
    </>
  )
}

export default App
