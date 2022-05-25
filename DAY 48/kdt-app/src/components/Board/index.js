import PropTypes from "prop-types";

const Board = ({ boardData }) => {
  return (
    <div>
      <h1>Board</h1>
      <ul>
        {boardData.map((data) => (
          <li key={data.id}>
            <h4>{data.id} | {data.title} | {data.author}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

Board.prototypes = {
  boardData: PropTypes.array,
};
export default Board;
