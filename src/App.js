
import './Styles/Style.css';
import Login from './Pages.jsx/Login';
import Folders from './Components.jsx/Folders';
import Register from './Pages.jsx/Register';
import FolderContextProvider, { FolderContext } from './Contexts/FolderContext';
import { Route,Routes} from 'react-router-dom';  
import TextBox from './Components.jsx/TextBox';
import AuthGuard from './AuthGuard.jsx/AuthGuard';
import Error from './Pages.jsx/Error';
function App() {
  return (
    <FolderContextProvider>
      
    <Routes>
      <Route path='/' element={<Login/>}/>
       <Route path='/SignUp' element={<Register/>}/> 
       
       
      <Route path='/' element={<AuthGuard/>}>
        <Route path='/Folders'element={<Folders/>}/>
      </Route>
      
      <Route path='/' element={<AuthGuard/>}>
      <Route path='/Folders/:id'element={<TextBox/>}/> 
      </Route>
       
      <Route path='*'element={<Error/>}/>
       
    </Routes>
      
    
    </FolderContextProvider>
  );
}

export default App;
