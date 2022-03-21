import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      </div>
     <div>
    <Dashboard/>
     </div>

     <div className='footer'>
       <Footer/>
     </div>
     
    </div>
  );
}

export default App;
