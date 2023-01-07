import React, { useContext,useState } from 'react'
import { FolderContext } from '../Contexts/FolderContext';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function TextBox() {
  const {id}=useParams();
  const  [edit,setEdit]=useState(false);
  let selectedObj={};
  const navigator=useNavigate();
  
  let selectedNote="";
  const{noteHeading,setNoteHeading,
    setHeadingAdded,
    headingAdded,
    noteContent,
    noteFolder,setNotefolder,
    setNoteContent}=useContext(FolderContext);
  
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

  const createContent=(e)=>{
    setNoteContent(e.target.value);
  }


  const navigateToFolders=()=>{
    navigator('/Folders');
  }
  const createNoteHeading=(e)=>{
       setNoteHeading(e.target.value);
  }


  const addNote=()=>{
   const folderId=Math.floor(Math.random()*10000);
   var headingArr=noteFolder.map(e=>e.heading);
   var idx=headingArr.indexOf(noteHeading);
   if(idx!=-1){
    alert(`${noteHeading} already exist`);
    return;
   }
   if(!noteContent||!noteHeading){
    return ;   
   } 
  
   setNotefolder((prev)=>{
      const obj={id:folderId,heading:noteHeading,content:noteContent};
      // noteFolder.unshift(obj);
      if(edit){
        
      }
      console.log(obj);
      navigator(`/Folders/${folderId}`)
      console.log(noteFolder,'note');
      setNoteContent("");
       setNoteHeading("");
       return [obj,...prev];
    }
    
    )

  }
  const Edit=()=>{
    setEdit(true);
    console.log(edit);
  } 

   const close=()=>{
    navigator('/Folders')
   }
    console.log(noteFolder);
    

  return (
    <div >
       <div className="text-box-header">
        <h2>Digital Note</h2>
        <div className="edit-del">
       {(id!='add')?(<> <button onClick={Edit}>Edit</button>
                    <button>Delete</button>
                    <button onClick={navigateToFolders}>Back</button>
                    </>
       ):(<>
          <button onClick={close}>close</button>


       </>)}
        
        </div>

      </div>
      {
        
        id=='add'||edit?(
           <div className='add-new'>

      {!headingAdded? ( <label>
        Note heading 
        <input value={noteHeading} className='folder-name-input' onChange={createNoteHeading} />
        </label>):(<h3>{noteHeading}</h3>)
        }
        
        <textarea value={noteContent} onChange={createContent}></textarea>
        {!headingAdded&&<button className='add-btn' onClick={addNote}>save</button>}
    </div>  
        ):
      
      
         
     ( <div className="text-area-outer">
     
      <div className="text-area">
       <h1>{selectedObj.heading}</h1> 
       <div className="text-content">
          {selectedObj.content}
        </div>
      </div>
       
        </div>)
}
    </div>
  )
}

export default TextBox