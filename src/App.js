import './App.css';
// import Particles from "react-tsparticles";
import {useLocation} from "react-router-dom"
// import {loadFull} from "tsparticles";
import Navbar from './Components/Navbar/Navbar';
// import particle from '../src/Components/Home/Particle';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import ContactMe from './Components/Contact/Contact';
import Projects from './Components/Projects/Project';




function App() {

  const location = useLocation();
  console.log(location);

  // const handleInit = async (main)=>{
  //   await loadFull(main)
  // }

  const renderparticle = location.hash === "#About";
  return (
    <div className="App">

    <Navbar />
      {/* {
        renderparticle &&(
          
          <Particles id="particles" height={window.outerHeight} options={particle} init={handleInit}/> 
         
        )
      } */}
      
      <Home />

      {/* <div className='appMainPage'> */}

        {
          renderparticle  &&(
            <About />
            )
        }
       
      {/* </div> */}
        
        <Skills />
        <Projects />
        <ContactMe />

      
     
       

    </div>
  );
}

export default App;





// import './App.css';
// import Navigation from './Components/Navbar';
// import AboutMe from './Components/About/AboutMe';
// import ContactMe from './Components/ContactMe';
// import Projects from './Components/Projects';
// import Home from './Components/Home';
// import Footer from './Components/Footer';



// function App() {
//   return (
//     <div className="App">
//        <Navigation />
//        <Home />
//        <AboutMe />
//        <Projects />
//        <ContactMe />
//        <Footer/>

//     </div>
//   );
// }

// export default App;

