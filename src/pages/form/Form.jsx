import "./Form.css";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Image from "../../assets/intro/rk.jpg";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

const Form = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="form">
        <Header />
        <FormHeader img={Image} firstName="Ranbir" lastName="Kapoor" />
        <FormBody />
      </div>
    </motion.div>
  );
};

export default Form;
