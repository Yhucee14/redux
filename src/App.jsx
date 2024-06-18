
import "./App.css";
import { useSelector,useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type: 'INC'});
  }

  const decrement = () => {
    dispatch({type: 'DEC'});
  }

  const addBy = () =>{
    
  }

  return (
    <div>
      <h1>counter app</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value</button>
    </div>
  );
}

export default App;
