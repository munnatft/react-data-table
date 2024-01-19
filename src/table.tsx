import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react"

export const Table = ({className="",...props}: HTMLAttributes<HTMLTableElement>) => {
    return (
        <div className="table-container" >
            <table className={`table ${className}`} {...props}  />
        </div>
    )
}

export const TableHeader = ({className="",...props}: HTMLAttributes<HTMLTableSectionElement>) => {
    return (
        <thead className={`thead ${className}`} {...props} />
    )
}

export const TableBody = ({className="",...props}: HTMLAttributes<HTMLTableSectionElement>) => {
    return (
        <tbody className={`tbody ${className}`} {...props} />
    )
}

export const TableRow = ({className="", ...props}: HTMLAttributes<HTMLTableRowElement> ) => {
    return <tr className={className} {...props} />
}

export const TableHead = ({className, ...props}: ThHTMLAttributes<HTMLTableCellElement>) => {
    return <th className={className} {...props} />
}

export const TableCell = ({className="", ...props}: TdHTMLAttributes<HTMLTableCellElement>) => {
    return <td className={className} {...props} />
}