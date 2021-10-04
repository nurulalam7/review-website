
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
      <Header></Header>
      
      <Router>
        <Linkid></Linkid>
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>
          <Route exact path='/home'>
            <Homepage></Homepage>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/service'>
            <Service></Service>
          </Route>
          <Route exact path='/review'>
            <Student></Student>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <Not></Not>
          </Route>

        </Switch>
        
      </Router>
      
      <Footer></Footer>
      
     
      
    </div>
  );
}



export default App;
