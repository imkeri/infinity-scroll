import React from 'react'

const Home = () => {

    const Click = ()=>{
      
        window.location = "/home"
    }
    
  return (
    <div className=''>
       <div className='d-flex justify-content-center align-items-center'>
       <button className='btn bg-warning border-0 px-5 py-3 ' onClick={Click}>click here</button>
       </div>
    </div>
  )
}

export default Home