import React,{useContext} from 'react'

function Folder({noteHeading,content}) {
  return (
    <div className='note-folder'>
        <h2>{noteHeading}</h2>
        <div className='folder-container'>
                {content}
        </div>
    </div>
  )
}

export default Folder