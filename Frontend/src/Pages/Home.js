import Footer from "../components/Footer/Footer";
import Front from "../components/Front/Front";
import Navbar from "../components/Header/Navbar";
import Parallax from "../components/Parallax/Parallax";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Parallax />
      <Front />
      <Footer />
    </div>
  );
};

export default Home;
