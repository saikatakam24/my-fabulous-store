import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2rem" }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", color: "white" }}
          >
            My Fabulous Store
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
