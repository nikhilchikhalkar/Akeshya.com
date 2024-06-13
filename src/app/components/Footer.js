import React from 'react'

function Footer() {
  return (
    <>
     <footer className='footer-shadow'>
        <div className='text-sm py-10  items-center flex justify-between w-full mx-auto ' >

            <div className='text-[#222] '>
                
            © Copyright 
            <strong>
            Akeshya
            </strong>
            . All Rights Reserved
        
            </div>

            <div className='' >
            <ul className='flex ' >
                <li className='px-3' >Terms and conditions</li>
                <li className='px-3' >Refund policy</li>
                <li className='px-3' >Privacy policy</li>
            </ul>
            </div>
        </div>
    </footer>   
    </>
  )
}

export default Footer