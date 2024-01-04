import { Box } from "@mui/material";

function Board({ board }) {
  return (
    <Box className="saved-count-box">
      <h4 className="mini-name">{board.title}</h4>
      <Box className="mini-score-left">
        <h1>{board.firstCount}</h1>
      </Box>
      <Box className="mini-score-right">
        <h1>{board.secondCount}</h1>
      </Box>
    </Box>
  );
}

export default Board;
