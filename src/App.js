import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/about';
import CourseOverview from './components/courseoverview';

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      </div>
     <div>
       <Routes>
       <Route path = '/' element = {<Dashboard/>}/>
       <Route path = '/about' element = {<AboutUs/>}/>
       <Route path = '/course/:courseid' element = {<CourseOverview/>} />
       </Routes>
    
     </div>

     <div className='footer'>
       <Footer/>
     </div>
     
    </div>
  );
}

export default App;
