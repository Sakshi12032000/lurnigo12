
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from '../src/Components/Navbar/Navbar';
import Home from '../src/Components/Home/Home';
import HomeNext from './Components/HomeNext/HomeNext';
import TutoringServices from './Components/TutoringServices/TutoringServices';
import WhyChoose from './Components/WhyChoose/WhyChoose';
import HowLurnigoWorks from './Components/HowLurnigoWorks/HowLurnigoWorks';
import StudentsReview from './Components/StudentsReview/StudentsReview';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import WhyShouldYou from './Components/WhyShouldYou/WhyShouldYou';

function App() {
  return (
     <>
         <Navbar/>
         <Home/>
         <HomeNext/>
         <TutoringServices/>
         <WhyChoose/>
         <HowLurnigoWorks/>
         <WhyShouldYou/>
         <StudentsReview/>
         <FAQ/>
         <Footer/>
     </>
      
  );
}

export default App;
