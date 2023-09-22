import React, { useContext } from 'react'
import { TodoContext } from '../context';

const Todo = ({todo}) => {
  const { state:{todos}, dispatch } = useContext(TodoContext);
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
      payload: newTodos,
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

  return (
    <div>
      <li className="todo" key={todo.id}>
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
                                        className={`todo-title ${
                                            todo.completed && "checked"
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
                            </li>
    </div>
  )
}

export default Todo