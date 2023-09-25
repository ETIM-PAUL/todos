import { useContext, useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import { TodoContext } from "./context";
import TopNav from "./components/TopNav";
import AddModal from "./components/AddModal";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";

function App() {
    const { state: { todos, activeTodo }, dispatch } = useContext(TodoContext);
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

            <main className="flex-grow container mx-auto py-8 w-full max-w-3xl">

                {/* All Todos */}
                {activeTab === "All" &&
                    <ul className="">
                        {!!todos.length ?
                            <div>
                                {todos.map((todo) => (
                                    <Todo key={todo?.id} todo={todo} />
                                ))}
                            </div>
                            :
                            <div className="bg-white rounded-lg shadow-md border p-4 space-y-4">
                                <span>No Tasks has been added</span>
                            </div>
                        }
                    </ul>
                }

                {/* Completed Todos */}
                {activeTab === "Completed" &&
                    <ul className="">
                        {!!todos.filter((todo) => todo.completed).length ?
                            <div>
                                {todos.filter((todo) => todo.completed).map((todo) => (
                                    <Todo key={todo?.id} todo={todo} />
                                ))}
                            </div>
                            :
                            <div className="bg-white rounded-lg shadow-md border p-4 space-y-4">
                                <span>No Completed task(s)</span>
                            </div>
                        }
                    </ul>
                }

                {/* Completed Todos */}
                {activeTab === "UnCompleted" &&
                    <ul className="">
                        {!!todos.filter((todo) => !todo.completed).length ?
                            <div>
                                {todos.filter((todo) => !todo.completed).map((todo) => (
                                    <Todo key={todo?.id} todo={todo} />
                                ))}
                            </div>
                            :
                            <div className="bg-white rounded-lg shadow-md border p-4 space-y-4">
                                <span>No Uncompleted task(s)</span>
                            </div>
                        }
                    </ul>
                }
            </main>

            {activeTodo &&
                <EditModal />
            }
            <AddModal />
            <DeleteModal />
        </div>
    );
}

export default App;
