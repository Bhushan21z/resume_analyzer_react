import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Appbar";
import Heading from "../Components/Reports/Heading";
import Analysis from "../Components/Reports/Analysis";
import { Grid } from "@mui/material";

const Report = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Analysis />
      <Footer />
    </div>
  );
};

export default Report;
