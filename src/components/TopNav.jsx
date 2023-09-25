import React, { useContext } from 'react'
import { TodoContext } from '../context'

const TopNav = () => {
  const { state, dispatch } = useContext(TodoContext)

  const showAddModal = () => {
    dispatch({
      type: "OPEN_ADD_MODAL"
    })
  }

  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">ToDo App</h1>
        <button onClick={showAddModal} className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">Add Task</button>
      </div>
    </header>
  )
}

export default TopNav