import React,{useContext, useState} from 'react'
import { FolderContext } from '../Contexts/FolderContext';
import Folder from './Folder'
import Modal from './Modal';

function Folders() {
const[isOpen,setIsOpen]=useState(true);
    const openModal=()=>{
        setIsOpen(true);
    }
    const {noteFolder,setNotefolder}=useContext(FolderContext);
    console.log(noteFolder);
    const folderArr=Object.keys(noteFolder).map(e=>{
        console.log(noteFolder[e].heading);
        return(
           <Folder noteHeading={noteFolder[e].heading} content={noteFolder[e].content}/>
        
            
        )
    })
    return (

    
    <div className='Folders'>
        <div className="reg-header-div">
        <h3>Dgital Note</h3>
        <button onClick={openModal}>Add new Note </button>
        </div>
        <div className="folder-container">
        {folderArr}
        {isOpen&&<Modal/>}
        </div>

    </div>
  )
}

export default Folders