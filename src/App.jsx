import './index.css';
import Sidebar from './components/Sidebar';
import Menubar from './components/Menubar';
import Friends from './components/content';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Online from './components/online';
import All from './components/all';
import Blocked from './components/blocked';
import Pending from './components/pending';

function App() {
  return (
    <Router>
      <div className='main'>
     
        <Sidebar /> 
        <Menubar />
        <Friends/>  

      </div>
    </Router>
  );
}

export default App;
