import { useContext, useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import { TodoContext } from "./context";
import NewTodo from "./components/newTodo";
import TopNav from "./components/TopNav";
import AddModal from "./components/modal";
import Tab from "./components/Tab";

function App() {
    const { state, dispatch } = useContext(TodoContext);
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

                    {/* <div className="bg-white p-4 rounded-b-md">
                        <div className="tab-content">
                            <p>This is the content for Tab 1.</p>
                        </div>
                        <div className="hidden tab-content">
                            <p>This is the content for Tab 2.</p>
                        </div>
                        <div className="hidden tab-content">
                            <p>This is the content for Tab 3.</p>
                        </div>
                    </div> */}
                </div>
            </div>

            <main className="flex-grow container mx-auto py-8">
                <ul className="bg-white rounded-lg shadow-2xl border p-4 space-y-4">
                    <li className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span className="text-gray-800">Sample Task</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="text-blue-500 font-bold hover:text-red-700">Edit</button>
                            <button className="text-red-500 font-bold hover:text-red-700">Delete</button>
                        </div>
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

            <AddModal />
        </div>
    );
}

export default App;
