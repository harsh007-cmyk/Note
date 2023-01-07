import React,{useContext, useState} from 'react'
import { FolderContext } from '../Contexts/FolderContext';
import Folder from './Folder'
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
function Folders() {
    const navigator=useNavigate();
console.log('rendering');
const[isOpen,setIsOpen]=useState(false);


    const navigateTopage=()=>{
        navigator('/Folders/add')
    }
    const openModal=()=>{
    
        setIsOpen(true);
    }
    const {noteFolder,setNotefolder}=useContext(FolderContext);
    console.log(noteFolder);

    const folderArr=noteFolder.map(e=>{
        
        return(
           <Folder noteFolder={noteFolder}
            setNotefolder={setNotefolder}
            id={e.id} 
            noteHeading={e.heading} 
            content={e.content} index={e}/>
            
        )
    })
    return (

    
    <div className='Folders'>
        <div className="reg-header-div">
            
        <h3>Digital Note</h3>
        <input type="text" className='search-field'/>
        <button onClick={navigateTopage}>Add new Note </button>
        </div>
        <div className="folder-container">
            <div className="note-folders">
            {folderArr}
            </div>
        
        {isOpen&&<Modal setIsOpen={setIsOpen}/>}
        </div>

    </div>
  )
}

export default Folders