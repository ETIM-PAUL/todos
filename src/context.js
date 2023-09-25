import React, { createContext, useReducer } from "react";
export const TodoContext = createContext();

const initialState = {
    todos: [],
    addModal: false,
    activeTodo: null,
    editModal: false,
    deleteModal: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state?.todos, action.payload],
                addModal: false
            };
        case "DELETE_TODO":
            const newArray = state?.todos.filter((todo) => todo.id !== state?.activeTodo);
            return {
                ...state,
                todos: newArray,
                deleteModal: false,
            };
        case "EDIT_TODO":
            const editedTodos = state.todos.map((todo) =>
                todo.id === state.activeTodo ? { ...todo, name: action?.payload, completed: false } : todo
            );
            if (state.activeTodo !== null) {
                return {
                    ...state,
                    todos: editedTodos,
                    editModal: false,
                    activeTodo: null
                };
            }
        case "TOOGLE_TODO_STATE":
            const newTodos = state?.todos.map((todo) =>
                todo.id === action?.payload ? { ...todo, completed: !todo.completed } : todo
            );
            return {
                ...state,
                todos: newTodos,
            };
        case "OPEN_ADD_MODAL":
            return {
                ...state,
                addModal: true,
            }
        case "CLOSE_ADD_MODAL":
            return {
                ...state,
                addModal: false,
            }
        case "OPEN_EDIT_MODAL":
            return {
                ...state,
                editModal: true,
                activeTodo: action.payload
            }
        case "CLOSE_EDIT_MODAL":
            return {
                ...state,
                editModal: false,
                activeTodo: null
            }
        case "OPEN_DELETE_MODAL":
            return {
                ...state,
                deleteModal: true,
                activeTodo: action.payload
            }
        case "CLOSE_DELETE_MODAL":
            return {
                ...state,
                deleteModal: false,
                activeTodo: null
            }

        default:
            return state;
    }
};

const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <TodoContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
