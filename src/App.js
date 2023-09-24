import { useContext, useEffect } from "react";
import "./App.css";
import Todo from "./components/todo";
import { TodoContext } from "./context";
import NewTodo from "./components/newTodo";
import TopNav from "./components/TopNav";
import Modal from "./components/modal";

function App() {
    const { state, dispatch } = useContext(TodoContext);

    // useEffect(() => {
    //     let canceled = false;
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (!canceled) {
    //                 dispatch({
    //                     type: "SET_TODOS",
    //                     payload: data.slice(0, 10),
    //                 });
    //             }
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });

    //     return () => (canceled = true);
    // }, []);

    return (
        <div className="min-h-screen bg-gray-10 flex flex-col">
            <TopNav />

            <main className="flex-grow container mx-auto py-8">
                <ul className="bg-white rounded-lg shadow-2xl border p-4 space-y-4">
                    <li className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span className="text-gray-800">Sample Task</span>
                        </div>
                        <button className="text-red-500 hover:text-red-700">Delete</button>
                    </li>

                </ul>
            </main>

            {/* <div className="App">
                <div className="todo-wrapper">
                    <ul>
                        {!!state?.todos.length &&
                            state?.todos.map((todo) => (
                                <div key={todo?.id}>
                                    <Todo todo={todo} />
                                </div>
                            ))}
                    </ul>
                    <NewTodo />
                </div>
            </div> */}

            <Modal />
        </div>
    );
}

export default App;
