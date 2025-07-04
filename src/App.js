import Navbar from "./components/Navbar/navbar";
import React,{ useState,useEffect }  from 'react';
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Resume from "./components/Resume /resume";
import Resumepart from "./components/Resume /resumepart";
import Portfolio from "./components/Portfolio/porfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/cursor";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    // Cleanup function to reset the style if the component unmounts
    return () => (document.body.style.overflow = '');
  }, [isPopupOpen]);

  return (
      <div className="App">
        <div className={`content ${isPopupOpen ? 'blurred' : ''}`}>
          <Cursor/>
          <Navbar/>
          <div className="Container">
            <Hero/>
            <About/>
            <Resumepart togglePopup={togglePopup}/>
            <Portfolio/>
            <Contact/>
            <Footer/>
          </div>
        </div>
        {/* Popup and backdrop */}
      {isPopupOpen && (
        <div className="popup-backdrop" onClick={togglePopup}>
          <div onClick={(e) => e.stopPropagation()}>
          <Resume togglePopup={togglePopup}/>
          </div>
        </div>
      )}
      </div>
  );
}
export default App;
