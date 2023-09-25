import React, { useContext, useState } from 'react'
import { TodoContext } from '../context'


const EditModal = () => {
  const { state: { editModal, activeTodo, todos }, dispatch } = useContext(TodoContext)
  const todo = todos.find((todos) => todos.id == activeTodo)

  const [taskName, setTaskName] = useState(todo?.name)
  const [errMes, setErrMes] = useState("")

  const hideModal = () => {
    dispatch({
      type: "CLOSE_EDIT_MODAL"
    })
  }

  const editTask = () => {
    if (taskName == "") {
      setErrMes("Please enter todo name")
      return;
    }
    dispatch({
      type: "EDIT_TODO",
      payload: taskName,
    });
    hideModal()
    setTaskName("")
    setErrMes("")
  }

  return (
    <div id="myModal" className={` ${editModal === true ? "block" : "hidden"} modal fixed bg-[#000] opacity-70 inset-0 w-full h-full flex items-center justify-center`}>
      <div className="modal-dialog bg-white z-50 shadow-lg rounded-md w-1/2">
        <div className="modal-content py-4 px-6">

          <div className="modal-header flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Edit Todo</h2>
            <button onClick={hideModal} id="closeModalButton" className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>


          <div className="modal-body">
            <label>Todo Name</label>
            <input type="text" onChange={(e) => setTaskName(e.target.value)} value={taskName} placeholder='Enter your Todo name' className="border p-3 rounded-md w-full mt-3" />
          </div>

          <p className='text-red-600 pt-1 italic'>{errMes}</p>

          <div className="mt-2 text-center sm:ml-4 sm:text-left">
            <h4 className="text-lg font-medium text-gray-800">

            </h4>
            <div className="items-center gap-2 mt-3 sm:flex">
              <button
                onClick={editTask}
                className="w-full mt-2 p-2.5 flex-1 text-white bg-blue-500 hover:bg-blue-900 rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
              >
                Proceed
              </button>
              <button
                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                onClick={hideModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal