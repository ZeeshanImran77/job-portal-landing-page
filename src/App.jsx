import { useState } from "react";
import "./index.css";
import Button from "./components/Button";
import Header from "./layout/Header";
import Hero from "./sections/Hero";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Default page */}
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/companies" element={<Companies />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
