// 1 - import the react & react DOM Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import ApproveCard from './component/ApproveCard'
import faker from 'faker'
import CommentDetail from './component/CommentDetail'

// 2 - component create JSX

const App = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', display:'grid', minHeight: '100vh', placeContent:'center' }}>
       <div className="ui container comments">
        <ApproveCard>
          <CommentDetail
            name="Mark" 
            date="07/05/2020" 
            comment="What a beautiful piece" 
            avatar={faker.image.image()}/>
        </ApproveCard>

        <ApproveCard >
          <div><h4>Are you happy?</h4></div>
        </ApproveCard>

        <ApproveCard>
          <CommentDetail name="Bob" date="07/06/2019" comment="What a nice piece"avatar={faker.image.image()}/>
        </ApproveCard>
      </div>
    </div>
  )
}

// 3 - send our component to the screen  // export 
ReactDOM.render(<App/>, document.querySelector('#root'))
