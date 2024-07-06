import React, { Fragment } from "react";
import images from "../../../utils/images/la_mere_la_montagne.jpeg";
import ModalImg from "../../ModalImg";
import Gallery from "../../Gallery";

const Home = () => {
  return (
    <>
      <ModalImg
        src={images}
        alt="la mere et la montagne"
        text="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </>
  );
};

export default Home;
