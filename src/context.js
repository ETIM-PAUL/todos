import React, { createContext, useReducer } from "react";
export const TodoContext = createContext();

const initialState = {
    todos: [],
    modal: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload,
            };
        case "OPEN_ADD_MODAL":
            return {
                ...state,
                modal: true,
            }
        case "CLOSE_ADD_MODAL":
            return {
                ...state,
                modal: false,
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
