import {createContext,useEffect,useState} from "react";

export const FolderContext=createContext();


function FolderContextProvider({children}){
   
    const initialValue=[
        {
         id:1,
         heading:"What is Lorem Ipsum",content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
 
     }
         
         
 ]


    const [noteFolder,setNotefolder]=useState(
        JSON.parse(localStorage.getItem('note'))||initialValue
    )

    useEffect(()=>{
        localStorage.setItem('note',JSON.stringify(noteFolder));
     },[noteFolder])
     const [isAuth,setIsAuth]=useState(false);
    const[noteHeading,setNoteHeading]=useState("");
    const [headingAdded,setHeadingAdded]=useState(false);
   const [noteContent,setNoteContent]=useState("");
   const[email,setEmail]=useState("");
    return (
        <FolderContext.Provider value={
            {
            noteHeading,
            setNoteHeading,
            headingAdded,
            setHeadingAdded,
            noteFolder,
            setNotefolder,
            noteContent,
            setNoteContent,
            isAuth,
            setIsAuth,
            email,
            setEmail
            }}>
            {children}
        </FolderContext.Provider>
    )
}

export default FolderContextProvider;