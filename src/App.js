
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Blog from './component/blog';
import TextForm from './component/TextForm';
import Aleart from './component/Aleart';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';



function App() {
  const [dMode, setDMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }
  
  const Mode = () => {
    if (dMode === 'light') {
      setDMode('dark');
      showAlert("darkmode is on ","success")
      document.body.style.backgroundColor = 'grey'
    } else {
      setDMode('light');
      showAlert("lightmode is on ","success")
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <><Router>
      <Navbar mode={dMode} toggles={Mode}></Navbar>
      <Aleart alert={alert} ></Aleart>
     
         <Routes>
        <Route path='/' element={<TextForm mode={dMode} alerts={showAlert}></TextForm>}/>
        </Routes>
        <Routes>
        <Route exact path='/about' element={ <About />}/>
        </Routes>
        <Routes>
        <Route exact path='/Blog' element={ <Blog />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
