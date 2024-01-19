import { Column } from "@tanstack/react-table";
import { HTMLAttributes } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";

interface DataTableColumnHeaderProps<TData, TValue>
  extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  if (!column.getCanSort()) {
    return <div className={className}>{title}</div>;
  }

  return (
    <div className="sortingColumnHeader" onClick={column.getToggleSortingHandler()} >
      <span>{title}</span>
      {column.getIsSorted() === "desc" ? <ArrowDownIcon height={16} width={16} /> : <ArrowUpIcon />}
    </div>
  );
};
