import React from 'react'

export default function TodoCard(prop) {
  const {children, handleDeletion,index, handleEdit }=prop

  return (
      <li className='todoItem' >
        {children}
        <div className='actionsContainer'>
          <button onClick={()=>{
            handleEdit(index)
          }}>
          <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={()=>{
            handleDeletion(index)
          }}>
          <i className="fa-solid fa-trash"></i>
          </button>
       
        </div>
      </li>
  )
}
