import React from 'react'

function Note({title,descriotion,isImportant,date,height}) {
  return (
    <>
     <div className='note relative' style={{height:height}} >
      <p className='text-[grey]'>Note 1</p>
      <h1 className='text-[#000] text-[20px] line-clamp-1 w-[80%]'>Website Design sdasdasdasdasd asdas  asdas d</h1>
      <p className='text-[gray] line-clamp-4 w-[80%]'>nasdasdasd asdas d asdas  sdasd ote for the testing this is  note number one  and i'm  making more notes today or next week so please shjd jajjaa jsjsj</p>
      <div className='noteBottom absolute bottom-5 w-[93%] flex justify-between items-center'>
        <p className='text-[grey]'>2/3/2024</p>

        <div className='flex items-center gap-1'>
          <img className='w-[30px] h-[30px]' src={require("../images/edit.png")}></img>
          <img className='w-[30px] h-[30px] ' src={require("../images/delete.jpg")}></img>
        </div>

        </div>  
        </div> 
    </>
  )
}

export default Note
