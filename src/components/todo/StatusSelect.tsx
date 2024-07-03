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
  isCompleted: boolean;
}) {
  const dispatch = useAppDispatch();
  const dis = () => {
    dispatch(updateStatus({ id: data.id, completed: !data.isCompleted }));
  };
  return (
    <Select onValueChange={dis}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={data.isCompleted ? "done" : "pending"} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pending" className="bg-orange-200 text-orange-800">
          Pending
        </SelectItem>
        <SelectItem value="done" className="bg-green-200 text-green-800">
          Done
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
