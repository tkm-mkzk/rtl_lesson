import React from 'react'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'
import RenderInput from './RenderInput'
import FrameworkList from './FrameworkList'
import MockServer from './MockServer'

function App() {
  const data = [
    {
      id: 1,
      item: 'React',
    },
    {
      id: 2,
      item: 'Angular',
    },
    {
      id: 3,
      item: 'Vue',
    },
  ]

  // 追加 output関数
  const output = (text) => {
    console.log(text)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter outputConsole={output} />
        <RenderInput outputConsole={output} />
        <FrameworkList frameworks={data} />
        <MockServer />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
