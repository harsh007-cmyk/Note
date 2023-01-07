import React,{useContext} from 'react'
import { FolderContext } from '../Contexts/FolderContext';
function Modal({setIsOpen}) {
    const{noteHeading,setNoteHeading,
          setHeadingAdded,
          headingAdded,
          noteContent,
          noteFolder,setNotefolder,
          setNoteContent}=useContext(FolderContext);
    
    
    const createContent=(e)=>{
      setNoteContent(e.target.value);
    }

    const createNoteHeading=(e)=>{
         setNoteHeading(e.target.value);
    }

    const close=()=>{
      console.log("fasdf");
      setIsOpen(false);
    }
    const abc=[1,3,4,5];

    const addNote=()=>{
      console.log("add Note");
      abc.unshift(8);
      console.log(abc,'abc');
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
        console.log(obj);
        console.log(noteFolder,'note');
        setNoteContent("");
         setNoteHeading("");
         return [obj,...prev];
      }
      
      )


      setIsOpen(false);
    }

    const arr=['f']
    arr.unshift('5');
    console.log(arr);
  return (
    <div className='modal'>
      <button onClick={close}>x</button>
      {!headingAdded? ( <label>
        Note heading 
        <input value={noteHeading} className='folder-name-input' onChange={createNoteHeading} />
        </label>):(<h3>{noteHeading}</h3>)
        }
        
        <textarea value={noteContent} onChange={createContent}></textarea>
        {!headingAdded&&<button className='add-btn' onClick={addNote}>save</button>}
    </div>
  )
}

export default Modal