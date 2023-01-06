import {createContext,useState} from "react";

export const FolderContext=createContext();


function FolderContextProvider({children}){
    const [noteFolder,setNotefolder]=useState(
        {
            "1":{
                heading:"note1",content:`
                afdsafsaf 
                fsadfsaf 
                fsadfsafdsafdsa 
                fdsfsafsf 
                dsfsafsafa`,
        
            },
            "2":{
                heading:"note2",content:"asdfa df gfdgds",
            },
            "3":{
                heading:"note3",content:"vz xcvxz vxzv",
            }
                
            }
    )
    const[noteHeading,setNoteHeading]=useState();
    const [headingAdded,setHeadingAdded]=useState(false);
   
    return (
        <FolderContext.Provider value={
            {
            noteHeading,
            setNoteHeading,
            headingAdded,
            setHeadingAdded,
            noteFolder,
            setNotefolder,
            }}>
            {children}
        </FolderContext.Provider>
    )
}

export default FolderContextProvider;