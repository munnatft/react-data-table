import { Column } from "@tanstack/react-table"

interface DataTableFacetedFilterProps<TData, TValue>{
    column?: Column<TData, TValue>,
    options: { label: string, value: string }[]
}

export const DataTableFacetedFilter = <TData, TValue>({
    column,
    options
}: DataTableFacetedFilterProps<TData,TValue>) => {
    const selectedValue = column?.getFilterValue() as string
    return (
        <select value={selectedValue} onChange={(e) => column?.setFilterValue(e.target.value)} >
            {
                options.map((option) => (
                    <option key={option.value} value={option.value} >{option.label}</option>
                ) )
            }
        </select>
    )
}