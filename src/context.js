import React, { createContext, useReducer } from "react";
export const TodoContext = createContext();

const initialState = {
    todos: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload,
            };

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
