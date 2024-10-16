import React from 'react'
import Image from 'next/image'
import pro1 from '../public/images/Rectangle 39.png'
import pro2  from '../public/images/Rectangle 40.png'
import pro3 from '../public/images/Rectangle 41.png'
import pro4 from  '../public/images/Rectangle 45 (1).png'
import pro5 from '../public/images/Rectangle 45 (2).png'
import pro6 from '../public/images/Rectangle 45.png'

const Portfolio = () => {
  return (
    <div className='flex flex-col justify-center mt-10  min-h-[100vh]'>
        <div className='flex flex-col p-10  min-h-[30vh] min-width-[90vh]'>
      <h1 className=' text-4xl ml-10 font-bold'>Portfolio</h1>
      <hr className='w-[30vh] ml-5' />
      <div className='flex flex-row flex-wrap items-center justify-center'>
<Image className='p-2' src={pro1} alt="" />
<Image className='p-2' src={pro2} alt="" />
<Image className='p-2' src={pro3} alt="" />
<Image className='p-2' src={pro4} alt="" />
<Image className='p-2' src={pro5} alt="" />
<Image className='p-2' src={pro6} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Portfolio
