import React, { useState } from 'react'

function TodoInput(props) {
  const [inputText, setInputText] = useState('')

  return (
    <div className="flex space-x-3">
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter your task"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={() => {
          props.addList(inputText)
          setInputText('')
        }}
      >
        SAVE
      </button>
    </div>
  )
}

export default TodoInput
