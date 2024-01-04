import { Box, Typography } from "@mui/material";
import Board from "./Board";

function SavedCounts({ boards }) {
  return (
    <Box>
      <Typography variant="h4" sx={{ mt: "50px" }}>
        SAVED COUNTS
      </Typography>
      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {boards.map((board) => {
          return <Board board={board} key={board.id} />;
        })}
      </Box>
    </Box>
  );
}

export default SavedCounts;
