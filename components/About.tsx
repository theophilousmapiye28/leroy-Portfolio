import React from 'react'
import Image from 'next/image'
import one from  '@/public/images/about font (698).png'

const About = () => {
  return (
    <div className='about bg-white   min-height-[80vh]'> 
              <h1 className='text-center text-black text-4xl mt-10 justify-start font-bold'>About Me</h1>
        
        <div className='flex flex-wrap items-center justify-center justify-around  '> 
            
            <div>
            <Image className='h-[60vh] w-full' src={one} alt="" />
            </div>
            <div className='flex flex-col  '>
      
            <p className='pb-[25px]    '>
       Im Leroy Gutu, a dedicated Digital Marketer with a passion for  
leveraging data-driven <br /> strategeis to enhance brand visibility and drive business growth 
  
            </p>
            <p className='pb-[25px]'>
   My expertise spans across SEO, PPC , social media marketing, and  <br /> 
content creation , allowing me to create and impement effective<br />
campaigns that resonate with target audiences.
            </p>
            <p className='pb-[25px]'>
          With a knack for innovation and keen eye for detail I continuesly explore new  <br />
trends and technologies to stay ahead in the ever-evolving digital landscape. My goal is to help <br />
business not only meet but exceed their marketing objectives through creative and impactful digital solutions.
            </p>
            </div>
        </div>
     
    </div>
  )
}

export default About
