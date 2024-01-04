import Box from "@mui/material/Box";

function DefaultBoard({
  changeCountFirst,
  changeCountSecond,
  resetCounts,
  firstCount,
  secondCount,
  saveButton,
  inputValue,
  setInputValue,
}) {
  return (
    <Box>
      <Box m={10} className="board-box">
        <h1 className="title">SCORE BOARD</h1>
        <h2 className="board-name">Board Name</h2>
        <Box className="score-box-left">
          <div className="score">{firstCount}</div>
        </Box>
        <h2 className="team-name-left">TEAM 1</h2>
        <Box className="vs">-</Box>
        <Box className="score-box-right">
          <div className="score">{secondCount}</div>
        </Box>
        <h2 className="team-name-right">TEAM 2</h2>
        <Box className="increase-decrease-left">
          <button onClick={changeCountFirst} className="plus">
            +
          </button>
          <button onClick={changeCountFirst} className="minus">
            -
          </button>
        </Box>
        <Box className="increase-decrease-right">
          <button onClick={changeCountSecond} className="plus">
            +
          </button>
          <button onClick={changeCountSecond} className="minus">
            -
          </button>
        </Box>
        <button onClick={resetCounts} className="reset">
          RESET
        </button>
        <Box className="save-section">
          <h1 className="save-title">Save Your Count</h1>
          <h3 className="save-name">Title</h3>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="save-input"
          />
          <br />
          <button onClick={saveButton} className="save-button">
            Save This Board
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default DefaultBoard;
