import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAppDispatch } from "@/redux/hook";
import { updateStatus, updateTodo } from "@/redux/features/todoSlice";

export default function StatusSelect(data: {
  id: string;
  isCompleted: string;
}) {
  const dispatch = useAppDispatch();
  const dis = (value: string) => {
    dispatch(
      updateStatus({
        id: data.id,
        completed: value,
      })
    );
  };
  return (
    <Select onValueChange={dis} defaultValue={data.isCompleted}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={data.isCompleted} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Pending" className="bg-orange-200 text-orange-800">
          Pending
        </SelectItem>
        <SelectItem value="Done" className="bg-green-200 text-green-800">
          Done
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
