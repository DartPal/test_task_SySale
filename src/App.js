import React from 'react'
import {Card} from "./components/Card";

const App = (props) => {
  return (
    <div className='wrapper'>
      <div className="container">
        <Card productsData={props.productsData} />
      </div>
    </div>
  )
}

export default App;
