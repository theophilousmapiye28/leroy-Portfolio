import React from 'react'
import Image from 'next/image'
import tol1 from '../public/tools/Semrush Logo - CrystalPng 1.png'
import tol2 from '../public/tools/google ads 1.png'
import tol3 from '../public/tools/CSS Flexbox Layout Guide _ CSS-Tricks 1.png'
import tol4 from '../public/tools/Hoe koppel je Google Analytics aan WordPress_ 1.png'
import tol5 from '../public/tools/Figma 3d Dark Mode Icon 1.png'
import tol6 from '../public/tools/Adobe Photoshop Icon PNG 1.png'
import tol7 from '../public/tools/THE NEW CANVA LOGO PNG IN 2024 - eDigital Agency 1.png'
import tol8 from '../public/tools/Will chatgpt replace web developers_ 1.png'


const Tools = () => {
  return (
    <div className='flex flex-col items-center mt-10  min-height-[50vh] '>

        <div className='flex flex-col p-10 bg-gray min-h-[30vh] min-width-[90vh]'>
        <h1 className='education text-4xl font-bold'>TOOLS </h1>
        <hr className='w-[30vh] mb-10 pt-2' />
        <div className='flex flex-row flex-wrap items-center justify-center '>
<Image className='h-[150px] p-2 w-[150px]' src={tol1} alt="" />
<Image  className='h-[150px]  p-2 w-[150px]'  src={tol2} alt="" />
<Image  className='h-[150px] p-2 w-[150px] '  src={tol3} alt="" />
<Image className='h-[150px] p-2  w-[150px]'  src={tol4} alt="" />
<Image  className='h-[150px] p-2 w-[150px]'  src={tol5} alt="" />
<Image className='h-[150px] p-2 w-[150px]'  src={tol6} alt="" />
<Image className='h-[150px] p-2  w-[150px]'  src={tol8} alt="" />
<Image  className='h-[150px] w-[150px] p-5'  src={tol7} alt="" />
</div>
        </div>
      
    </div>
  )
}

export default Tools
