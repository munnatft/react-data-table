import './App.css'
import DataTable from './data-table'
import { columns } from './column'
import { tasks } from './data'

function App() {

  return (
    <div >
        <DataTable columns={columns} data={tasks} />
    </div>
  )
}

export default App
