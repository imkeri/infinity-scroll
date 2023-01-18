import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componets/Home';
import Homepage from './componets/Homepage';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Homepage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
