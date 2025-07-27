import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

export default function Portfolio() {
  return (
    <>
      <div className='d-flex flex-column align-items-center  justify-content-center p-4'>
        <h2 className='text-center pb-3'>PORTFOLIO COMPNENT</h2>
        <div className='bg-danger w-75 p-5 d-flex justify-content-center mb-3 align-items-center'>
          <img src="src\assets\images\testimonial-2.jpg" alt="" className='  rounded-circle'  />
        </div>
        <div className='bg-success-subtle w-75 p-5 d-flex justify-content-center mb-3 align-items-center'>
          <img src="src\assets\images\testimonial-2.jpg" alt="" className='  rounded-circle'  />
        </div>
        <div className='bg-dark w-75 p-5 d-flex justify-content-center mb-3 align-items-center'>
          <img src="src\assets\images\testimonial-2.jpg" alt="" className='  rounded-circle'  />
        </div>
        <div className='bg-black w-75 p-5 d-flex justify-content-center mb-3 align-items-center'>
          <img src="src\assets\images\testimonial-2.jpg" alt="" className='  rounded-circle'  />
        </div>
        <div className='bg-dark-subtle w-75 p-5 d-flex justify-content-center mb-3 align-items-center'>
          <img src="src\assets\images\testimonial-2.jpg" alt="" className='  rounded-circle'  />
        </div>
      </div>
    
    </>
  )
}
