import { useContext, useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import { TodoContext } from "./context";
import NewTodo from "./components/newTodo";
import TopNav from "./components/TopNav";
import AddModal from "./components/AddModal";
import Tab from "./components/Tab";
import DeleteModal from "./components/DeleteModal";

function App() {
    const { state: { todos }, dispatch } = useContext(TodoContext);
    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "Completed", "UnCompleted"]

    return (
        <div className="min-h-screen bg-gray-10 flex flex-col">
            <TopNav />

            <div className="bg-gray-200 p-4">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-center gap-4">
                        {tabs.map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`${activeTab === tab ? "bg-blue-500" : ""} py-2 px-4 text-black font-bold rounded-tl-md hover:bg-blue-600 focus:outline-none`}>{tab}</button>
                        ))}
                    </div>
                </div>
            </div>

            <main className="flex-grow container mx-auto py-8">

                {/* All Todos */}
                {activeTab === "All" &&
                    <ul className="bg-white rounded-lg shadow-2xl border p-4 space-y-4">
                        {!!todos.length ?
                            <div>
                                {todos.map((todo) => (
                                    <Todo key={todo?.id} todo={todo} />
                                ))}
                            </div>
                            :
                            <div>
                                <span>No Tasks has been added</span>
                            </div>
                        }
                    </ul>
                }

                {/* Completed Todos */}
                {activeTab === "Completed" &&
                    <ul className="bg-white rounded-lg shadow-2xl border p-4 space-y-4">
                        {!!todos.filter((todo) => todo.completed).length ?
                            <div>
                                {todos.filter((todo) => !todo.completed).map((todo) => (
                                    <Todo key={todo?.id} todo={todo} />
                                ))}
                            </div>
                            :
                            <div>
                                <span>No Tasks has been completed</span>
                            </div>
                        }
                    </ul>
                }

                {/* Completed Todos */}
                {activeTab === "UnCompleted" &&
                    <ul className="bg-white rounded-lg shadow-2xl border p-4 space-y-4">
                        {!!todos.filter((todo) => !todo.completed).length ?
                            <div>
                                {todos.filter((todo) => !todo.completed).map((todo) => (
                                    <Todo key={todo?.id} todo={todo} />
                                ))}
                            </div>
                            :
                            <div>
                                <span>No Tasks has been completed</span>
                            </div>
                        }
                    </ul>
                }
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
            <AddModal />
            <DeleteModal />
        </div>
    );
}

export default App;
