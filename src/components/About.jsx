import React from 'react'
import MyImage from './images/s.png'

const About = () => {
  return (
    <div className='lg:flex'>
      <div className='w-[30%] sm:w-[40%] md:w-[50%] mt-[100px]'>
        <div className='ml-2 lg:ml-0'>
            <h1 className='text-2xl sm:text-4xl md:text-6xl'>About Me</h1>
            <h1 className='text-2xl sm:text-3xl md:text-4xl mt-4'>I am <span
            style={{ background: 'linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            SADIA ASLAM</span></h1>
            <p className='mt-2'>I am a Qaulified Teacher of Biology. I did master in Biological Sciences
            I have been teaching for 5 years. I have taught in different schools and colleges. I have been teaching online for 2 years.
            </p>
            <p className='mt-3 text-2xl'>Why did you hire me?</p>
            <p>Student enjoy the lesson with me and start building interset in studies. My lessons are engagging.</p>
        </div>
        <div className='ml-2 lg:ml-0'>
          <h1 className='text-2xl mt-3'>Our Preperation</h1>
          <ul className='flex'>
            <li>Exam Style Question</li>
            <li className='ml-3'>Quizess</li>
            <li className='ml-3'>Past Paper practice</li>
          </ul>
        </div>
        </div>
        <div className='mt-[50px] lg:mt-0 sm:ml-[100px] xl:ml-[220px]
        w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px]'>
        <img src={MyImage} alt="nothing"/>
        </div>
    </div>
  )
}

export default About;