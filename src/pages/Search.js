import React from 'react'
import Navbar from '../components/Navbar'
import Note from '../components/Note'
import Footer from '../components/Footer'

const Search = () => {
  return (
    <>
      <Navbar/>
      <div className="div flex items-center pr-5 pt-4 justify-end">
        <div className="inputBox !w-[370px] !p-[5px] ">
            <input type="text" placeholder='Search Notes' />
        </div>
      </div>
      <div className="gridItems gridOne">
        <Note height="180px"/>
        <Note height="180px"/>
        <Note height="180px"/>
      </div>

      <Footer/>
    </>
  )
}

export default Search
