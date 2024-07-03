import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { UpdateTodoBtn } from "./UpdateTodoBtn";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { removeTodo } from "@/redux/features/todoSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import StatusSelect from "./StatusSelect";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

export function TodoTable() {
  const invoices = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  return (
    <Table className="border rounded-lg">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>description</TableHead>
          <TableHead>status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.length ? (
          invoices.map((invoice, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{invoice.id!}</TableCell>
              <TableCell className="font-medium">{invoice.title}</TableCell>
              <TableCell>{invoice.description}</TableCell>
              <TableCell>
                <StatusSelect
                  id={invoice.id}
                  isCompleted={invoice.isCompleted!}
                />
              </TableCell>

              <TableCell className="text-right space-x-2">
                {invoice.isCompleted !== "Pending" ? null : (
                  <UpdateTodoBtn data={invoice} />
                )}
                <Button
                  variant="destructive"
                  onClick={() => dispatch(removeTodo(invoice.id))}
                >
                  <Trash2 className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-center font-semibold text-2xl"
            >
              No Todo
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
