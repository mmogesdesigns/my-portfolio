import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact'; 

function App() {


  return (
    <div className='portfolio container-fluid p-0 '>
      <Header/>
      
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      </main>      
      
      </div>
  )
}

export default App
