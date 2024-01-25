import React from "react";
import { Header } from "../../components/Header";
import Hero from "../../components/Hero";
import House from "./sections/House";
import Cities from "./sections/Cities";
import Footer from "../../components/Footer";
export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <House title="Novidades" />
      <Cities />
      <House title="Novas Tendências" />
      <Footer />
    </>
  );
};
