import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function PlsSaveCount() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "70px" }}>
      <Box>
        <Typography variant="h3">SAVED COUNTS</Typography>
        <Typography variant="h5">There is not a saved count.</Typography>
      </Box>
    </Box>
  );
}

export default PlsSaveCount;
