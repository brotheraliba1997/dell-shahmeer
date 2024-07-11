import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
function Sidebar({ open, handleClick }) {
  const [section, setSection] = useState("1");

  return (
    <Box
      sx={{
        width: "300px",
        border: "1px solid black",
        height: "100%",
        position: "fixed",
        backgroundColor: "#151A30",

        top: "100px",
        transform: open ? "translateX(0)" : "translateX(-105%)",
        transition: "1s",
        // transform: "translateX(0)"
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
          sx={{
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            backgroundColor: `${section === "1" && "#1F2942"}`,
            padding: "10px 5px",
          }}
          onClick={() => setSection("1")}
        >
          1 Section
        </Box>
        <Box
          sx={{
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            backgroundColor: `${section === "2" && "#1F2942"}`,
            padding: "10px 5px",
          }}
          onClick={() => setSection("2")}
        >
          2 Section
        </Box>
        <Box
          sx={{
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            backgroundColor: `${section === "3" && "#1F2942"}`,
            padding: "10px 5px",
          }}
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
              <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>
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
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>

              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>

              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>

              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>
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
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>
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
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>

              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>

              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>

              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>
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
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
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
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>

              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>

              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>

              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                one
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                Two
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:focus": {
                    backgroundColor: "#3EA48C",
                  },
                  "&:hover": {
                    backgroundColor: "#3EA48C",
                  },
                }}
              >
                four
              </Button>
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
