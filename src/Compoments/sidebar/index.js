import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
function Sidebar() {
  const [section, setSection] = useState("1");

  console.log(section)
  return (
    <Box
      sx={{
        width: "300px",
        border: "1px solid black",
        height: "100%",
        position: "fixed",
        // margin: "10px 0",
        backgroundColor: "#151A30",

        top: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 15px",
        }}
      >
        <Box
          sx={{ color: "white", fontSize: "18px" }}
          onClick={() => setSection("1")}
        >
          1 Section
        </Box>
        <Box
          sx={{ color: "white", fontSize: "18px" }}
          onClick={() => setSection("2")}
        >
          2 Section
        </Box>
        <Box
          sx={{ color: "white", fontSize: "18px" }}
          onClick={() => setSection("3")}
        >
          3 Section
        </Box>
      </Box>

      {section === "1" ? (
        <>
          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                padding: "0px 15px",
                margin: "10px 0px",
              }}
            >
              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>
            </Box>
          </Box>

          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                padding: "15px 15px",
                margin: "10px 0px",
                flexWrap: "wrap",
              }}
            >
              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>

              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>

              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>

              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
      {section === "2" ? (
        <>
          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                padding: "0px 15px",
                margin: "10px 0px",
              }}
            >
              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>
            </Box>
          </Box>

          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                padding: "15px 15px",
                margin: "10px 0px",
                flexWrap: "wrap",
              }}
            >
              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>

              
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>

              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
           

              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}

{section === "3" ? (
        <>
          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                padding: "0px 15px",
                margin: "10px 0px",
              }}
            >
              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
           
            </Box>
          </Box>

          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                padding: "15px 15px",
                margin: "10px 0px",
                flexWrap: "wrap",
              }}
            >
              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>

              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>

              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>

              <Button variant="contained">one</Button>
              <Button variant="contained">Two</Button>
              <Button variant="contained">four</Button>
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Sidebar;
