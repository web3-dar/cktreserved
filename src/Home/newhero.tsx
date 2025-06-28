import { Link } from "react-router-dom";
import hero from '../assets/her3.jpg' 
const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Benvenuto a Apex — La Tua Banca di Fiducia
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Soluzioni bancarie moderne per ogni esigenza. Gestisci i tuoi conti,
          risparmia in modo intelligente e investi nel tuo futuro.
        </p>
        <Link to="/login">
          <button className="bg-white text-black px-6 py-3 text-lg rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
            Accedi al tuo conto
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
