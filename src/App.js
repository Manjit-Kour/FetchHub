import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [userName,setName]=useState("");
  const [arr, setArray]=useState([]);
  const [error, setError]=useState("");
  const [isChecked, setCheck]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
   axios.get(`https://api.github.com/users/${userName}/repos`)
    .then(res=>{
      const filteredRepos= isChecked? res.data:res.data.filter(repo=>repo.fork===false)
      const arr_data=filteredRepos.map((repo)=>{
          return( [repo.name, repo.language, repo.description, repo.size]);
      })
      arr_data.sort((a,b)=>b[3]-a[3]);
      setArray(arr_data);
      setError("");
    })
    .catch(err=>{
      setArray([]);
      setError("Not Found")})
  }

  const handleCheckbox=(e)=>{
    console.log(e);
   const check= e.target.checked;
   setCheck(check);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <label>Github username:</label>
      <input type="text" value={userName} onChange={(e)=>setName(e.target.value)}></input>
      <label>Include forks:</label>
      <input type="checkbox" checked={isChecked} onChange={handleCheckbox}/>
      <button type="submit" className={userName.trim() === "" ? "disabled" : "enabled"}>Submit</button>
      </form>
      {error && <span>{error}</span>}
      {
      arr.length!==0 &&
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Description</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((element, rowIndex) => {
           return( <tr key={rowIndex}>
              {element.map((value, colIndex) => {
                return(<td key={colIndex}>{value}</td>)
          })}
            </tr>
            )})
          }
        </tbody>
      </table>
      }
    </div>
  );
}

export default App;
