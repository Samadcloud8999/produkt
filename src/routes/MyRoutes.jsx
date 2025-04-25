import React from "react";
import { Header } from "../components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { About } from "../components/About/About";
import { Slaider } from "../components/Slaider/Slaider";
import { Shop } from "../components/Shoop/Shop";
import { Aboutdog } from "../components/Aboutdog/Aboutdog";

const MyRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/our" element={<Slaider />} />
        <Route path="/helps" element={<Shop />} />
        <Route path="/contacts" element={<Aboutdog />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
