import React from 'react'

function TodoList(props) {
  return (
    <li className="flex justify-between items-center bg-gray-200 rounded-lg p-3 mb-3 shadow-sm">
      {props.item}
      <span className="text-red-500 cursor-pointer" onClick={() => props.deleteItem(props.index)}>
        <i className="fa-solid fa-trash"></i>
      </span>
    </li>
  )
}

export default TodoList
