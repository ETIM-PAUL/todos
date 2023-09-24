import React, { createContext, useReducer } from "react";
export const TodoContext = createContext();

const initialState = {
    todos: [],
    addModal: false,
    editModal: false,
    toastMessage: "",
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
            }
        case "CLOSE_EDIT_MODAL":
            return {
                ...state,
                editModal: false,
            }

        default:
            return state;
    }
};

export const showToast = (dispatch, message, timeout = 3000, toastStatus = "success") => {
    dispatch({
        type: "SNACKBAR",
        payload: {
            message,
            toastStatus
        },
    });

    setTimeout(() => {
        dispatch({
            type: "SNACKBAR",
            payload: {
                message: "",
            },
        });
    }, timeout);
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
