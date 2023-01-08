import {createContext,useEffect,useState} from "react";

export const FolderContext=createContext();


function FolderContextProvider({children}){
   
    const initialValue=[
        {
         id:1,
         heading:"note1",content:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.`,
 
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