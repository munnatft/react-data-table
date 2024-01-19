import type { ColumnDef } from "@tanstack/react-table";
import { Task } from "./type";
import { DataTableColumnHeader } from "./data-table-column-heaer";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <input
          type="checkbox"
          aria-label="Select all"
          checked={
            table.getIsAllPageRowsSelected() ||
            table.getIsSomePageRowsSelected()
          }
          onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
        />
      );
    },
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(e.target.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <p>{row.getValue("title")}</p>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return <div className="status">{row.getValue("status")}</div>;
    },
  },
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
];
