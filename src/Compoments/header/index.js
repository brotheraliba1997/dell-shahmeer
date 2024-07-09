import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Margin } from "@mui/icons-material";
function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        // width "100%",
        backgroundColor: "#151A30"
   
      }}
    >
      <Box  sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px",
        width: "100%",
        backgroundColor: "#202A43",
        height: "60px",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box sx={{ padding: "20px", backgroundColor: "#3EA48C" }}> </Box>
        <Box
          sx={{
           md:{ padding: "10px 60px"},
           sm:{ padding: "5px 15px"},
            backgroundColor: "#3EA48C",
            color: "black",
          }}
        >
          {" "}
          <h6 style={{ padding: 0, margin: 0 }}>Logo</h6>{" "}
        </Box>
      </Box>

      <Box sx={{display: "flex" , gap: "10px"}}>
      <Box
          sx={{
            padding: "10px 40px",
            
            backgroundColor: "#3EA48C",
            color: "black",
          }}
        >
          {" "}
          <h6 style={{ padding: 0, margin: 0 }}>create free acount</h6>{" "}
        </Box>

        <Box
          sx={{
            padding: "10px 40px",
            backgroundColor: "#3EA48C",
            color: "black",
          }}
        >
          {" "}
          <h6 style={{ padding: 0, margin: 0 }}>Login</h6>{" "}
        </Box>
        </Box>
        </Box>
    </Box>
  );
}

export default Header;
