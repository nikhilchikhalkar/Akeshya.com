'use client'
import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { BiUpArrowAlt } from "react-icons/bi";
function ScrollToTopButton() {
  return (
    <>
    <div>
        <ScrollToTop topPosition={50} showUnder={160} >
            <p className='bg-indigo-700 text-white p-2 hover:bg-[#78cedf] rounded-lg'>
            <BiUpArrowAlt size={25} />
            </p>
        </ScrollToTop>
    </div>
    </>
  )
}

export default ScrollToTopButton