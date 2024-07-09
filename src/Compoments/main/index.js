import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Main({open}) {
  return (
    <Box
      sx={{
        width: open?"calc(100% - 300px)": "100%",
        marginLeft: open?"300px":"0px",
      
        height: "100%",
        paddingTop: "80px",
        transition: "all 1s"

      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
              xs=6 md=8
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Main;
