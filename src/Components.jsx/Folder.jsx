import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom';
function Folder({noteFolder,setNotefolder,id,noteHeading,content}) {
 const navigate=useNavigate();
  const deleteFolder=(e)=>{
    e.stopPropagation();
    console.log(id,"id");
    console.log(noteFolder);
    setNotefolder((el)=>{
      var deletedArr=noteFolder.filter(elm=>{
          return elm.id!=id;
      })
      return deletedArr
    })
  }
  const navigateToTextBox=()=>{
    
    navigate(`/Folders/${id}`);
  }
  
  return (
    <div className='note-folder' >
      <div className="folder-close">
        <button onClick={navigateToTextBox}>Open</button>
      <button onClick={deleteFolder}>delete</button>
      </div>
      
        <h2>{noteHeading}</h2>
        <div className='folder-container'>
                {content}
        </div>
    </div>
  )
}

export default Folder