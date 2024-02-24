
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import gif from "../assets/Celebration.gif";
import Footer from "./Footer";
import Slideshow from "./SlideShow";
import '../../assets/css/home.css';

const Home = () => {
  const navigate = useNavigate();
  const handleContent = () => {
    navigate("/form");
  };

  // const carouselImages = [
  //   "eventrave/src/assets/background.jpg",
  //   "eventrave/src/assets/slideback.jpg",
  //   "eventrave/src/assets/vector1.jpg",
  // ];

  return (
    <>
      <div className="landing-page">
        <header>
          <div className="container">
            <Link to="/landing">
              <img
                src={logo}
                alt="LOGO"
                style={{ height: "80px", width: "80px" }}
              />
            </Link>
            <ul className="links">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/themes">Themes</Link>
              </li>
            </ul>
            <p className="para">“Cake, Candles and a lot of SMILES”</p>
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Hola!</h1>
              <p>
                “Today's agenda: Eat cake, make memories, and have a blast!”
              </p>
              <button onClick={handleContent}>Your Way</button>
            </div>
            <div className="image">
              <img
                src={gif}
                alt="Landing Page"
                style={{ height: "600px", width: "730px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="carousel">
        <Slideshow />
      </div>
      <Footer />
    </>
  );
};

export default Home;