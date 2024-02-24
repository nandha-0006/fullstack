
import { useNavigate } from 'react-router-dom';
// import Navbar from '../../Components/NavBar';
// import '../../assets/css/HomePage.css'
// import Footer from '../../Components/Footer';
import Footer from '../../components/ui/Footer';
import '../../assets/css/HomePage.css' ;
import Navbar from '../../components/ui/NavBar' ;


const Home = () => {

    const navigate = useNavigate();

    const handleClick= () => {
     navigate('/login');
    };
  return (
    <>
      <Navbar />
      <div className="display">
        <div className="display-content">
        
          <h1 className="display-heading animate__animated animate__rotateIn">“Good fortune is what happens when opportunity meets with planning.”</h1>
          <p className="display-description">
          <button onClick={handleClick} className="order-now-button">Explore</button>
          </p>
        </div>
      </div>
      <Footer/> 
   
    </>
  );
};

export default Home;




