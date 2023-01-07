import {createContext,useState} from "react";

export const FolderContext=createContext();


function FolderContextProvider({children}){
    const [noteFolder,setNotefolder]=useState(
        [
               {
                id:1,
                heading:"note1",content:`
                afdsafsaf 
                fsadfsaf 
                fsadfsafdsafdsa 
                fdsfsafsf 
                dsfsafsafa`,
        
            },
                 {
                    id:2,
             heading:"note2",
             content:"asdfa df gfdgds fsdfsaf fdsfsa dsfsf",
            },
             {
                id:3,
             heading:"note3",content:`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            },
            {
                id:4,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
            {
                id:5,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
            {
                id:6,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
            {
                id:6,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
            {
                id:7,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
            {
                id:7,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            }
            ,
            {
                id:8,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
            {
                id:9,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
            {
                id:10,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
           {
                id:11,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
            {
                id:12,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            },
           {
            id:13,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            }
            ,
            {
                id:14,
                heading:`fffffffffffffffffffffffffffffffffffffffffffffff `,
                content:`ffffffffffffffffffffffff`
            }
                
        ]
    )
    const[noteHeading,setNoteHeading]=useState("");
    const [headingAdded,setHeadingAdded]=useState(false);
   const [noteContent,setNoteContent]=useState("");
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
            setNoteContent
            }}>
            {children}
        </FolderContext.Provider>
    )
}

export default FolderContextProvider;