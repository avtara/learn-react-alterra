import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"

const initialValue = [
    {
        id: 1,
        title: "Mengerjakan Tugas",
        completed: true,
    },
];

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue,
    },
    reducers: {
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload);
        },

        addTodo: (state, action) => {
            const newTodo = { id: uuid(), ...action.payload };
            state.todos = [...state.todos, newTodo];
        },

        checkTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        },
    },
});

export const { deleteTodo, addTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;