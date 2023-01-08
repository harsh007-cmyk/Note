import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import { FolderContext } from '../Contexts/FolderContext';
function Folder({noteFolder,
                setNotefolder,
                id,
                noteHeading,
                content}) {

      const {
        setNoteHeading,
        setNoteContent,}=useContext(FolderContext);
 const navigate=useNavigate();
 let selectedObj={}; 
 let selectedNote="";

 for(var el of noteFolder){
  if(el.id==id){  
    selectedObj=el;  
    selectedNote=el.heading;

  }
}
if(id!=='add'&&!selectedNote){
  return (<div>
    error
  </div>)
}




  const deleteFolder=(e)=>{
    e.stopPropagation();
    console.log(id,"id");
    console.log(noteFolder);
    setNotefolder((el)=>{
      const deletedArr=noteFolder.filter(elm=>{
          return elm.id!=id;
      })
      return deletedArr
    })
  }
 
  
  
  const navigateToTextBox=()=>{
    var idx=noteFolder.indexOf(selectedObj);
    var noCurrArr=noteFolder.filter((e,i)=>{
      if(i!=idx) return e;
    })
    setNoteHeading(selectedObj.heading);
    setNoteContent(selectedObj.content);
    setNotefolder( [selectedObj,...noCurrArr]);
    console.log(selectedObj.heading);

    navigate(`/Folders/${id}`);
  }
  
  return (
    <div className='note-folder' >
      <div className="folder-close">
        <button onClick={navigateToTextBox}>Open</button>
      <button onClick={deleteFolder}>delete</button>
      </div>
      
        <h2>{noteHeading}</h2>
        <div className='folder-content'>
                {content}
        </div>
    </div>
  )
}

export default Folder