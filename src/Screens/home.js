import { Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Sidebar from "../Compoments/sidebar";
import Header from "../Compoments/header";
import Main from "../Compoments/main";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <Box >
      <Header />
      {/* <Box sx={{display: "flex"}}>
        <Sidebar />
        <Main />
      </Box> */}
      <Main />
    </Box>
  );
}

export default Home;
