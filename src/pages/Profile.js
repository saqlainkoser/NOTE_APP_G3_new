import React from 'react'
import Navbar from '../components/Navbar'
import Note from '../components/Note'
import Footer from '../components/Footer'

const Profile = () => {
  return (
    <>
        <Navbar/>
      <div className="flex items-center justify-between w-screen h-[300px]  px-[50px]">
        <div className='flex items-center gap-[10px]'>
            <div className="profileCircle w-[150px] h-[150px] rounded-[50%] bg-[#d9d9d9]"></div>
            <div>
                <h3 className='text-[23px]'>Shaan Ansari</h3>
                <p className="m-[0px] p-[0px] text-[grey] text-[15px] -mt-1">Joined In 2/3/2023</p>
            </div>
        </div>

        <div className="relative h-[40%]">
            <div className='flex items-center gap-[10px] text-[grey]'>Total Notes :3 | Improtant Notes: 1 </div>
            <div className="absolute bottom-0 flex items-center gap=[10px]">
                <button className="btnNormal">Add Pic</button>
                <button className='btnNormal'>Add Note</button>
            </div>
        </div>
        </div>
    <div className="w-screen px-[50px]">
       <h3 className='text-[26px]'>Your <span style={{color:"#578df5"}}>Importand</span> Notes</h3>
       </div>
       <div className="gridItems">
            <Note/>
            <Note/>
            <Note/>
       </div>

       <div className="w-screen px-[50px] mt-4">
       <h3 className='text-[26px]'>Your <span style={{color:"#578df5"}}>Normal</span> Notes</h3>
       </div>
       <div className="gridItems mb-3">
            <Note/>
            <Note/>
            <Note/>
       </div>

       <Footer/>
    </>
  )
}

export default Profile
