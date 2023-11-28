import {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setData(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <button onClick={onClick}>불러오기</button>
      {data && <div>{JSON.stringify(data, null, 2)}</div>}

    </div>
  );
}

export default App;
