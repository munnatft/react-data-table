import type{ Table } from '@tanstack/react-table'


type DataTableToolBarProps<TData> = {
    table: Table<TData>
}

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
        </div>
    )
}

