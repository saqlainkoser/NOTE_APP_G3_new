import React from 'react'
import { FaYoutube ,FaFacebook ,FaInstagramSquare} from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className='footer h-[120px]  mt-5 w-screen px-[50px] bg-[#f4f4f4] flex items-center justify-between'>
        <h3 className='text-2xl'>Keep Notes</h3>
        <div className='text-center'>
            <p>Designed By <span className='sp-text'>ShankesaatCode</span>Youtube Channel</p>
            <p >Copy Right All Right Reserved</p>
        </div>

        <div className='text-gray'>
            <p className='font-semibold'>Connect Me</p>
            <div className='flex items-center gap-1'>
                <i className='p-[5px] bg-[#fff] text-[20px] cursor-pointer'><FaYoutube /></i>
                <i className='p-[5px] bg-[#fff] text-[20px] cursor-pointer'><FaFacebook /></i>
                <i className='p-[5px] bg-[#fff] text-[20px] cursor-pointer'><FaInstagramSquare /></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
