
import Footer from '../Home/footer';
import Header from '../Home/header';

import HelpSection from '../Home/hero2';
import hero from '../assets/hero.jpg';
import Promotions from '../components/promotions';
import RatesSection from '../components/ratesection';


const Home: React.FC = () => {
 

  return (
    <>

    <Header/>

    
   
    <HelpSection/>
    
    <div className="w-full flex justify-center">
  <img src={hero} alt="Hero" className="max-w-full h-auto" />
</div>

    <Promotions/>
    <RatesSection/>
    <Footer/>
    
    </>
  
  );
};

export default Home;
