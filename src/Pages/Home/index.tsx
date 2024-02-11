import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import Hero from "../../components/Hero";
import House from "./sections/House";
import Cities from "./sections/Cities";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import { getProperties } from "../../services/gets";
import { IProperty } from "../../models/property/IProperty";

export const Home = () => {
  const [modernProperties, setModernProperties] = useState<IProperty[]>([]);
  const [tendenceProperties, setTendenceProperties] = useState<IProperty[]>([]);
  useEffect(() => {
    initialProperties();
  }, []);

  const initialProperties = async () => {
    try {
      const properties = await getProperties(1);
      const tendences = await getProperties(2);
      if (tendences) {
        setTendenceProperties(tendences);
      }
      if (properties) {
        setModernProperties(properties);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <Hero />
      <House title="Casas mais maravilhosas" properties={modernProperties} />
      <Cities />
      <House title="Novas Tendências" properties={tendenceProperties} />
      <Footer />
    </>
  );
};
