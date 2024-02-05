import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData } from './Components/actions';

function App() {
  const dispatch = useDispatch();
 const todo= useSelector((state) => state.data.todo)
  const handleAddData=()=> dispatch(addData())
  const handleDeleteData = ()=>dispatch(deleteData()); 
  
  return (
    <div className="App">
      <h1>Redux thunk</h1>
      <button onClick={handleAddData}>Add Data</button>
      <button onClick={handleDeleteData}>Delete Data</button>
      {todo && <div>{JSON.stringify(todo)}</div>}
    </div>

  );
}

export default App;
