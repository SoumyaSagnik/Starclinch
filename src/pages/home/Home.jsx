import "./Home.css";
import Intro from "./intro/Intro";
import Gallery from "./gallery/Gallery";
import Button from "../../components/Button/Button";
import Details from "./details/Details";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";

const Home = () => {
  const styles = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="home">
        <Header />
        <Intro />
        <Gallery />
        <div style={styles}>
          <Button text="See Price And Book" className="homeGenericButton" />
        </div>
        <Details />
      </div>
    </motion.div>
  );
};

export default Home;
