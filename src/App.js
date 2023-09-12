import React from 'react'
import ChartDisplay from './ChartDisplay'
import { SelectLabel } from './components/SelectLabel'
import { useState } from 'react'
function App() {
  const [text, setText] = useState('meters')
  return (
    <div>
      <h1>App</h1>
      <div>
        <SelectLabel text="meters" setText={setText}/>
        <SelectLabel text="spm" setText={setText}/>
        <SelectLabel text="watts" setText={setText}/>
      </div>
      <ChartDisplay text={text}/>
    </div>
  )
}

export default App