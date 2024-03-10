import React from 'react'


const Footer = () => {
  return (
    <div className=' min-h-[90px] flex  justify-between items-center bg-black text-white '>
        <div className='  flex justify-center items-center  '>
            <img className='h-[3rem] mx-4  rounded-[100%] ' src="images/club-logo.jpg"/>
            <img className='h-[3rem]  rounded-[100%] ' src="images/clg-logo.jpeg"/>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-center pt-2'>Made With ❤️ by AI & NLP NITT</p>
        </div>
        <div className='flex justify-center items-center  '>
            
            
        </div>
    </div>
  )
}

export default Footer