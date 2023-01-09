import React,{useContext, useState} from 'react'
import { FolderContext } from '../Contexts/FolderContext';
import Folder from './Folder';
import { useNavigate } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
function Folders() {
    const navigator=useNavigate();
    const[searchValue,setSearchValue]=useState("");
    const[similarArr,setSimilarArr]=useState([]);
    
    const navigateTopage=()=>{
        navigator('/Folders/add')
    }
    
    const {noteFolder,setNotefolder}=useContext(FolderContext);

    const folderArr=noteFolder.map(e=>{
        
        return(
           <Folder key={e.id} noteFolder={noteFolder}
            setNotefolder={setNotefolder}
            id={e.id} 
            noteHeading={e.heading} 
            content={e.content}/>
            
        )
    })

    const findHeading=(e)=>{
        const searchText=e.target.value;
        setSearchValue(searchText);
        const lowerCaseHeading=searchText.toLowerCase();
        var similarlist=noteFolder.filter(e=>{
          if( e.heading.toLowerCase().match(lowerCaseHeading))return e;
        })
        const similarfolders=similarlist.map(e=>(
            <Folder key={e.id} noteFolder={noteFolder}
            setNotefolder={setNotefolder}
            id={e.id} 
            noteHeading={e.heading} 
            content={e.content}/>
        ))
        console.log(similarlist,'simList');
        setSimilarArr(similarfolders);
    }
   const logout=()=>{
        localStorage.removeItem('user-note');
        window.location.reload(false);
   } 
    return (

    
    <div className='Folders'>
        <div className="reg-header-div">
            
        <h3>Digital Note</h3>
        <label className="search-label">
        <AiOutlineSearch/>
        <input type="text" onChange={findHeading} value={searchValue} className='search-field'/>
        </label>
        <div className="btns">
        <button onClick={navigateTopage}>Add new Note </button>
        <button onClick={logout}>logout </button>
        </div>
        <div className="m-btns">
        <button onClick={navigateTopage}>Add new Note </button>
        <button onClick={logout}>logout </button>
        </div>

        </div>
        <div className="folder-container">
            <div className="note-folders">
            {searchValue?(similarArr):(folderArr)}
            
            </div>
        
    
        </div>

    </div>
  )
}

export default Folders