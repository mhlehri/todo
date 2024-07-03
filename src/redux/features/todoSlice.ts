import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: string;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [] as TTodo[],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: "Pending" });
    },
    updateTodo: (state, action: PayloadAction<TTodo>) => {
      console.log(action.payload);
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...action.payload } : todo
      );
    },
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; completed: string }>
    ) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: action.payload.completed }
          : todo
      );
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, removeTodo, updateStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
