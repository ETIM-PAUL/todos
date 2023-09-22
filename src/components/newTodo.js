import React, { useContext, useState } from 'react'
import { TodoContext } from '../context';

const NewTodo = () => {
  const [newTask, setNewTask] = useState('')
  const { state:{todos}, dispatch } = useContext(TodoContext);

  const handleAdd = (id) => {
    let newTaskId = Number(todos[todos.length - 1].id)
console.log(newTaskId)
    let newTodoObject = {
      completed: false,
      id: newTaskId+1,
      title: newTask,
      userId: 1,
    }

    const updatedArray = [...todos, newTodoObject];

    dispatch({
      type: "SET_TODOS",
      payload: updatedArray,
  });
};

  return (
    <div className='add-input'>
      <input onChange={(e) => setNewTask(e.target.value)} value={newTask} type="text" placeholder="Enter your todo" />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  )
}

export default NewTodo