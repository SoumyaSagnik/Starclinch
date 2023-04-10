import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/loader/Loader";

const Form = lazy(() => import("./pages/form/Form"));
const Home = lazy(() => import("./pages/home/Home"));

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/cart/checkout"
          element={
            <Suspense fallback={<Loader />}>
              <Form />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
