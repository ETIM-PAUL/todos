import React, { useContext } from 'react'
import { TodoContext } from '../context'


const Modal = () => {
  const { state: { modal }, dispatch } = useContext(TodoContext)

  const hideModal = () => {
    dispatch({
      type: "CLOSE_ADD_MODAL"
    })
  }

  return (
    <div id="myModal" className={` ${modal === true ? "block" : "hidden"} modal fixed bg-[#000] opacity-70 inset-0 w-full h-full flex items-center justify-center`}>
      <div className="modal-dialog bg-white shadow-lg rounded-md w-1/2">
        <div className="modal-content py-4 px-6">

          <div className="modal-header flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Modal Title</h2>
            <button id="closeModalButton" className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>


          <div className="modal-body">
            <p>This is the modal content. You can add your content here.</p>
          </div>


          <div className="modal-footer mt-4 flex justify-end">
            <button onClick={hideModal} id="closeModalButton" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full focus:outline-none mr-2">
              Cancel
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal