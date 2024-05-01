import React from 'react'

export default function TodoItem(todo, onDelete) {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={onDelete
      }>Delete</button>
    </div>
  )
}
