import Board from "./Board";

function SavedCounts({ boards }) {
  return (
    <div>
      <div className="saved-counts">
        <h1>SAVED COUNTS</h1>
      </div>
      <div className="saved-box">
        {boards.map((board) => {
          return <Board board={board} key={board.id} />;
        })}
      </div>
    </div>
  );
}

export default SavedCounts;
