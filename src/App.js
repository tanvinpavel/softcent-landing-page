import './App.css';
import AboutUs from './views/aboutUs/AboutUs';
import Customer from "./views/customer/Customer";
import DesignTech from "./views/designTech/DesignTech";
import DevTech from "./views/devTach/DevTech";
import Footer from "./views/footer/Footer";
import Home from "./views/home/Home";
import OurJob from "./views/ourJob/OurJob";
import OurProduct from "./views/ourProduct/OurProduct";
import Portfolio from "./views/portfolio/Portfolio";
import Pricing from "./views/pricing/Pricing";
import Workflow from "./views/workflow/Workflow";

function App() {
  return (
    <div className="App">
      <Home/>
      <Customer/>
      <OurJob/>
      <OurProduct/>
      <Pricing/>
      <AboutUs/>
      <Portfolio/>
      <DesignTech/>
      <DevTech/>
      <Workflow/>
      <Footer/>
    </div>
  );
}

export default App;
