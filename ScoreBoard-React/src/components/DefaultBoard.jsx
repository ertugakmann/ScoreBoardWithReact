import App from "../App";

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
    <div>
      <div className="board-box">
        <h1 className="title">SCORE BOARD</h1>
        <h2 className="board-name">Board Name</h2>
        <div className="score-box-left">
          <div className="score">{firstCount}</div>
        </div>
        <h2 className="team-name-left">TEAM 1</h2>
        <div className="vs">-</div>
        <div className="score-box-right">
          <div className="score">{secondCount}</div>
        </div>
        <h2 className="team-name-right">TEAM 2</h2>
        <div className="increase-decrease-left">
          <button onClick={changeCountFirst} className="plus">
            +
          </button>
          <button onClick={changeCountFirst} className="minus">
            -
          </button>
        </div>
        <div className="increase-decrease-right">
          <button onClick={changeCountSecond} className="plus">
            +
          </button>
          <button onClick={changeCountSecond} className="minus">
            -
          </button>
        </div>
        <button onClick={resetCounts} className="reset">
          RESET
        </button>
        <div className="save-section">
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
        </div>
      </div>
    </div>
  );
}

export default DefaultBoard;
