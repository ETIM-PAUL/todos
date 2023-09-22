import { useContext, useEffect } from "react";
import "./App.css";
import Todo from "./components/todo";
import { TodoContext } from "./context";

function App() {
    const { state, dispatch } = useContext(TodoContext);

    useEffect(() => {
        let canceled = false;
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                if (!canceled) {
                    dispatch({
                        type: "SET_TODOS",
                        payload: data.slice(0, 10),
                    });
                }
            })
            .catch((err) => {
                console.error(err);
            });

        return () => (canceled = true);
    }, []);

    return (
        <div className="App">
            <div className="todo-wrapper">
                <ul>
                    {!!state?.todos.length &&
                        state?.todos.map((todo) => (
                           <Todo todo={todo}/>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
