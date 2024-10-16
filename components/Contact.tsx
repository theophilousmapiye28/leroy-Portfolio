import React from 'react'
import Image from 'next/image'
import icon1 from '../public/images/contact/Vector (7).png'
import icon2 from '../public/images/contact/Group 4 (4).png'
import icon3 from '../public/images/contact/Vector (8).png'
import icon4 from '../public/images/contact/Vector (9).png'
import icon5 from '../public/images/contact/Vector (11).png'
import icon6 from '../public/images/contact/Vector (12).png'
const Contact = () => {
  return (
    <div className=''>
        <div className='min-h-[60vh] flex items-center justify-center'>
    
     <div className='flex flex-row flex-wrap  '>
 
<div className='flex flex-col p-10 '>
<h2 className=' text-4xl font-bold'>Contact</h2>
<hr className='w-[30vh] mb-10 pt-2' />
<a href=""><Image className='  rounded-md inline-block' src={icon1}  alt="" />+263 785 651 863</a>
<a href=""><Image className=' rounded-md inline-block'  src={icon2}  alt="" /> leroygutu696@gmail.com</a>
<div className='flex flex-row'>
<Image className=' ' src={icon3}  alt="" />
<Image className=' ' src={icon4}  alt="" />
<Image className=' ' src={icon5}  alt="" />  
<Image className=' ' src={icon6}  alt="" /> 

</div>
<button className='bg-blue rounded-md p-2 flex items-center text-white justify-center w-[20vh]'>Download Cv</button>
</div>
<div className='form'>
<form className='flex flex-col' action="">
<input className='h-[5vh] w-[50vh] bg-gray rounded-md m-2' type="text"  placeholder='Your Name' />
<input className='h-[5vh] w-[50vh] bg-gray rounded-md m-2' type="text"  placeholder='Your Email' />
<textarea className='h-[30vh] w-[50vh] bg-gray rounded-md m-2' placeholder='Massage' name="" id=""></textarea>
<button className='bg-blue rounded-md p-2 flex items-center text-white justify-center w-[20vh]'>Submit</button>
</form>

 

</div>


     </div>


        </div>
      </div>
  )
}

export default Contact
