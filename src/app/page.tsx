"use client";
import { AddTodoBtn } from "@/components/todo/AddTodoBtn";
import { TodoTable } from "@/components/todo/TodoTable";
import Container from "@/components/ui/Container";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Home() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <h1 className="text-center text-5xl text-primary font-semibold pt-10">
        Todo App
      </h1>
      <div className="flex justify-between my-8">
        <AddTodoBtn />
        {/* <FilterTodo /> */}
      </div>
      <TodoTable />
    </Container>
  );
}
