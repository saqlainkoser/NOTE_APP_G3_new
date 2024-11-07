
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



function AddNote() {

  const editor = useRef(null);
  const [content, setContent] = useState('');

  return (
    <>
      <Navbar />
      <div className="addNoteCon min-h-screen px-[50px]">
        <form action="" className='my-5'>
          <h3 className='m-0 p-0 text-2xl  '>Create A New Note</h3>

          <div className="inputBox !block !bg-transparent">
            <label htmlFor="title" className='my-2'>Enter A Note title</label>
            <input
              type='text'
              placeholder='Note Title'
              className='w-full p-2 border border-gray-300 rounded-md mt-1'
              style={{ border: "2px solid #555" }}
              name="title"
              id='title'
              required
            />
          </div>
          <div className="inputBox !block !bg-transparent">
            <label htmlFor="title" className='my-2'>Enter A Note title</label>
            <textarea
              type='text'
              placeholder='Note Title'
              className='w-full p-2 border border-gray-300 rounded-md mt-1 min-h-[20px]'
              style={{ border: "2px solid #555" }}
              name="title"
              id='description'
              required
            />
          </div>

          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1} // tabIndex of textarea // preferred to use only this option to update the content for performance reasons
            onChange={newContent => setContent(newContent)}
          />

         <button className='btnNormal my-3 !min-w-[200px]' type='submit'></button>

        </form>

      </div>
      <Footer />
    </>
  )
}

export default AddNote
