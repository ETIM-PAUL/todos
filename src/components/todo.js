import React, { useContext, useState } from 'react'
import { TodoContext } from '../context';

const Todo = ({ todo }) => {
    const { state: { todos }, dispatch } = useContext(TodoContext);
    const [editId, setEditId] = useState(null);

    const handleCheck = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        dispatch({
            type: "SET_TODOS",
            payload: newTodos,
        });
    };

    const handleDelete = (id) => {
        const newArray = todos.filter((todo) => todo.id !== id);
        dispatch({
            type: "SET_TODOS",
            payload: newArray,
        });
    };

    const handleEdit = (e) => {
        const newTodos = todos.map((todo) =>
            todo.id === editId ? { ...todo, title: e.target.value } : todo
        );
        dispatch({
            type: "SET_TODOS",
            payload: newTodos,
        });
    };

    const showDeleteModal = () => {
        dispatch({
            type: "OPEN_DELETE_MODAL"
        })
    }

    return (
        <div>
            {/* <li className="todo" key={todo.id}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleCheck(todo.id)}
                />
                {editId === todo.id ? (
                    <input
                        type="text"
                        value={todo.title}
                        onChange={handleEdit}
                    />
                ) : (
                    <span
                        className={`todo-title ${todo.completed && "checked"
                            }`}
                    >
                        {todo.title}
                    </span>
                )}
                {editId === todo.id ? (
                    <button onClick={() => setEditId(null)}>
                        ✅
                    </button>
                ) : (
                    <button
                        className="del-button"
                        onClick={() => setEditId(todo.id)}
                        disabled={todo.completed}
                    >
                        ✏️
                    </button>
                )}
                <button
                    className="del-button"
                    onClick={() => handleDelete(todo.id)}
                >
                    🗑️
                </button>
            </li> */}
            <li className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                    <span className="text-gray-800">{todo.name}</span>
                </div>
                <div className="flex gap-2">
                    <button className="text-blue-500 font-bold hover:text-blue-700">Edit</button>
                    <button onClick={showDeleteModal} className="text-red-500 font-bold hover:text-red-700">Delete</button>
                </div>
            </li>
        </div>
    )
}

export default Todo