import type{ Table } from '@tanstack/react-table'
import { DataTableFacetedFilter } from './data-table-faceted-filter'


type DataTableToolBarProps<TData> = {
    table: Table<TData>
}

export const statuses = [
    {
        value: "",
        label: "Select Status"
    },
    {
      value: "backlog",
      label: "Backlog",
    },
    {
      value: "todo",
      label: "Todo",
    },
    {
      value: "in progress",
      label: "In Progress",
    },
    {
      value: "done",
      label: "Done",
    },
    {
      value: "canceled",
      label: "Canceled",
    },
  ]

export function DataTableToolBar<TData>({table}: DataTableToolBarProps<TData>){
    return (
        <div className="toolbar-container" >
            <input 
                type="text" 
                name="title" 
                aria-label="filter title" 
                value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                onChange={(e) => {
                    table.getColumn("title")?.setFilterValue(e.target.value)
                }}
                className="input"
            />
            {
                table.getColumn("status") && (
                    <DataTableFacetedFilter column={table.getColumn("status")} options={statuses} />
                )
            }
        </div>
    )
}

