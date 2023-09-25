import React, { useContext, useState } from 'react'
import { TodoContext } from '../context';

const Todo = ({ todo }) => {
    const { state, dispatch } = useContext(TodoContext);

    const handleCompleteTodo = () => {
        dispatch({
            type: "TOOGLE_TODO_STATE",
            payload: todo?.id
        })
    }

    const showDeleteModal = () => {
        dispatch({
            type: "OPEN_DELETE_MODAL",
            payload: todo?.id
        })
    }
    const showEditModal = () => {
        dispatch({
            type: "OPEN_EDIT_MODAL",
            payload: todo?.id
        })
    }

    return (

        <div className="bg-white rounded-lg shadow-md border p-4 space-y-4 mb-3">
            <li className="flex justify-between items-center z-10">
                <div className="flex items-center space-x-2">
                    <input checked={todo.completed} onChange={() => handleCompleteTodo(todo.id)}
                        type="checkbox" className="hover:cursor-pointer h-5 w-5 text-blue-500" />
                    <span className={`${todo.completed && "line-through"} text-gray-800`}>{todo.name}</span>
                </div>
                <div className="flex gap-2">
                    <button onClick={showEditModal} className="text-blue-500 font-bold hover:text-blue-700">Edit</button>
                    <button onClick={showDeleteModal} className="text-red-500 font-bold hover:text-red-700">Delete</button>
                </div>
            </li>
        </div>
    )
}

export default Todo