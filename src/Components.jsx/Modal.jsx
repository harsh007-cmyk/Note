import React,{useContext} from 'react'
import { FolderContext } from '../Contexts/FolderContext';
function Modal() {
    const{noteHeading,setNoteHeading,setHeadingAdded,headingAdded}=useContext(FolderContext);
    console.log(useContext(FolderContext));
    
    const createNoteHeading=(e)=>{
         setNoteHeading(e.target.value);
    }


    const addHeading=()=>{
        if(noteHeading)
        setHeadingAdded(true);
    }
  return (
    <div className='modal'>
      {!headingAdded? ( <label>
        Note name 
        <input value={noteHeading} className='folder-name-input' onChange={createNoteHeading} />
        </label>):(<h3>{noteHeading}</h3>)
        }
        
        {!headingAdded&&<button className='add-btn' onClick={addHeading}>add</button>}
    </div>
  )
}

export default Modal