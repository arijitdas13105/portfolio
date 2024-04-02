import React from 'react'
import './Loading.css'
const Loading = () => {
    console.log("this is loading component ");
  return (
    // <div style={{backgroundColor:"red" ,height:'100vh'}} >Loading....</div>

    (
      <>
      
      <div className="loader-container">
      <div className="loader">
        <div style={{ '--i': 1 }}>
          
          <h2  className='load-text'>.</h2>
          </div>
        <div style={{ '--i': 2 }}><h2   className='load-text'>.</h2>
          </div>
        <div style={{ '--i': 3 }}><h2  className='load-text'>.</h2>
          </div>
        <div style={{ '--i': 4 }}><h2  className='load-text'>.</h2>
          </div>
      </div>
      {/* <div className="loading-ring"></div> */}
    </div>
      </>
    )
  )
}

export default Loading