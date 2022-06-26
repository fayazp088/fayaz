import React from "react";
import { Grid } from "@mui/material";
import Layout from "./Layout";
import { motion } from "framer-motion";
import bgImg from "../assets/bg.webp";
import styled from "styled-components";

const Home = () => {
  const name = ["F", "A", "Y", "A", "Z"];
  return (
    <NameContainer>{/* <NameTitle>fayaz pasha</NameTitle> */}</NameContainer>
  );
};

export default Home;

const NameContainer = styled.div`
  background-image: url(${bgImg});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  /* filter: brightness(2); */
  background-position: center top;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: all 2s ease-in-out;
`;

const NameTitle = styled.h1`
  /* font-family: "Chango", cursive; */
  z-index: 100;
  font-size: 12rem;
  text-align: center;
  line-height: 1;
  margin: 5px;
  padding: 0;
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
`;
