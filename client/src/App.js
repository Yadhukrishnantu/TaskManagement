
import './App.css';
import Dashboard from './components/Dashboard';
import Delete from './components/Delete';
import Edit from './components/Edit';
import View from './components/View';
import Add from './components/Add';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='add' element={<Add/>}></Route>
        <Route path='edit/:id' element={<Edit/>}></Route>
        <Route path='view/:id' element={<View/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
