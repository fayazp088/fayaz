import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutContiner>{children}</LayoutContiner>;
};

export default Layout;

const LayoutContiner = styled(Grid)`
  /* margin: 5rem !important; */
  min-height: 85vh;
  width: 100%;
  /* background-color: #000; */
  color: #fff;
`;
