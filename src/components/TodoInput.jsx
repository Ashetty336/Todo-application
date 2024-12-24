import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
  const {handleTodos,toDoValue,setTodoValue}=props
 
  return (
    <header>
      <input value={toDoValue} onChange={(e)=>{
        setTodoValue(e.target.value)
      }}placeholder="Enter To-do" />
      <button onClick={()=>{
        handleTodos(toDoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}
