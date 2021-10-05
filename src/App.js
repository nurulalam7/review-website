
import './App.css';
import {useEffect} from 'react';
import Header from './Components/Header/Header';

import Service from './Components/Service/Service';
import About from './Components/About/About';
import Contact from './Components/Contactus/Contact';
import Student from './Components/Studentreview/Student';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import Not from './Components/Notfound/Not';
import Linkid from './Components/Linkid/Linkid';
import Footer from './Components/Footer/Footer';


function App() {

 
  return (
    <div className="">
      
      
      <Router>
        {/* <Linkid></Linkid> */}
        <Header></Header>
        <Switch>
           
          <Route exact path='/'>
            
            <Homepage></Homepage>
            
          </Route>
          <Route path='/home'>
            
            <Homepage></Homepage>
            
          </Route>
          <Route  path='/about'>
           
            <About></About>
           
          </Route>
          <Route path='/service'>
           
            <Service></Service>
            
          </Route>
          <Route  path='/review'>
           
            <Student></Student>
            
          </Route>
          <Route  path='/contact'>
            
            <Contact></Contact>
           
          </Route>
          <Route path='*'>
            <Not></Not>
          </Route>
          
        </Switch>
        <Footer></Footer>
        
          
        
          
        
      </Router>
      
     
      
     
      
    </div>
  );
}



export default App;
