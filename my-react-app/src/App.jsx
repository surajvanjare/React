import React, {useState} from 'react'
import './App.css'

const App = () => {
    const [age, setage] = useState(10)
    const changeAge = () => {
        return setage(20)
    }
  return (
    <div>
        <h1>The age is {age}</h1>
        <button onClick={changeAge}>Change age</button>
    </div>
  )
}

export default App