// 1 - import the react & react DOM Libraries
import React from 'react'
import ReactDOM from 'react-dom'

// 2 - component create JSX

const App = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', display:'grid', minHeight: '100vh', placeContent:'center' }}>
      <h1 > Hello React </h1>
    </div>
  )
}

// 3 - send our component to the screen  // export 
ReactDOM.render(<App/>, document.querySelector('#root'))
