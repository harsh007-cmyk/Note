
import './Styles/Style.css';
import Login from './Pages.jsx/Login';
import Folders from './Components.jsx/Folders';
import Register from './Pages.jsx/Register';
import FolderContextProvider from './Contexts/FolderContext';
import { createBrowserRouter,
          Route,Routes} from 'react-router-dom';  
import TextBox from './Components.jsx/TextBox';
function App() {
  return (
    <FolderContextProvider>
      
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/SignUp' element={<Register/>}/>
      <Route path='/Folders' element={<Folders/>}/>
      <Route path='/Folders/:id' element={<TextBox/>}/>
    </Routes>
      
    
    </FolderContextProvider>
  );
}

export default App;
