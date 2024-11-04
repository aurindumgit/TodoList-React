import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [listTodo,setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText]);
  }

  const deleteItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  }

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>
        <TodoInput addList={addList} />
        <ul className="mt-4">
          {listTodo.map((listItem, i) => (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteItem} />
          ))}
        </ul>
        <h4 className='flex justify-center'>made by Auri</h4>
      </div>
      
    </div>
  )
}

export default App
