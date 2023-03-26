import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[gray] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/2bd912ce-4188-40bf-9849-383978a19c90' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4'>Contact</p>
            <p className='py-4'>Submit your information below or send me an email at carson.dipangrazio@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
          <button className='text-white border-2 hover:bg-gray-light hover:border-gray-light px-4 py-3 my-8 mx-auto '>Send me a message!</button>
        </form>
    </div>
  )
}

export default Contact