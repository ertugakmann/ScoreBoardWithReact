function Board({ board }) {
  return (
    <div className="saved-count-box">
      <h4 className="mini-name">{board.title}</h4>
      <div className="mini-score-left">
        <h1>{board.firstCount}</h1>
      </div>
      <div className="mini-score-right">
        <h1>{board.secondCount}</h1>
      </div>
    </div>
  );
}

export default Board;
