import Image from './../../assets/images/testimonial-2.jpg'


export default function Home() {
  return (
    <>
   
      <section className='bg-success-subtle d-flex flex-column justify-content-center align-items-center p-4'>
        <img className='w-25 rounded-circle ' src={Image} alt=""  />
        <h1 className='text-white p-2'>START FRAMEWORK</h1>
        <p className='text-white fs-5 '>Graphic Artist-Web Designer- Illustrator</p>
      </section>
     
    </>
  )
}