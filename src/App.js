
import './Styles/Style.css';
import Login from './Pages.jsx/Login';
import Folders from './Components.jsx/Folders';
import Register from './Pages.jsx/Register';
import FolderContextProvider from './Contexts/FolderContext';
function App() {
  return (
    <FolderContextProvider>
    
     <Folders/>
      {/* <Login/>
      <Register/> */}
    
    </FolderContextProvider>
  );
}

export default App;
