import "./App.css";
import DataTable from "./data-table";
import { columns } from "./column";
import { tasks } from "./data";
import { PaginationState } from "@tanstack/react-table";
import { useMemo, useState } from "react";

function App() {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const paginationState = useMemo(
    () => ({ pageIndex, pageSize }),
    [pageIndex, pageSize]
  );
  console.log({ pageIndex, pageSize });

  const slicedData = tasks.slice(
    pageIndex * pageSize,
    pageIndex * pageSize + pageSize
  );

  return (
    <div>
      <DataTable
        columns={columns}
        data={slicedData}
        pagination={paginationState}
        onPaginationChange={setPagination}
      />
    </div>
  );
}

export default App;
