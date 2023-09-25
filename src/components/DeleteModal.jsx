import React, { useContext } from "react";
import { TodoContext } from "../context";

const DeleteModal = () => {
  const { state: { deleteModal }, dispatch } = useContext(TodoContext)

  const hideModal = () => {
    dispatch({
      type: "CLOSE_DELETE_MODAL"
    })
  }

  return (
    <>
      <div className={`${deleteModal === true ? "block" : "hidden"} fixed inset-0 z-10 overflow-y-auto`}>
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 sm:flex flex-col">
              <div className="flex">

                <div className="inline-flex justify-center items-center w-12 h-12  bg-red-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-red-600 text-center"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="inline mt-2 pl-8 text-[15px] leading-relaxed text-gray-500">
                  Proceed to Delete Todo? This is not reversible.
                </p>
              </div>
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">

                </h4>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                  >
                    Delete
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
      </div>
    </>
  );
}

export default DeleteModal;