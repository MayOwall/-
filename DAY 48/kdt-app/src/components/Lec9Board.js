import PropTypes from "prop-types";

export default function Lec9Board({ boardData }) {
  return (
    <ul>
      {boardData.map((data) => (
        <li key={data.id}>
          {data.id} | {data.title}
        </li>
      ))}
    </ul>
  );
}

Lec9Board.propTypes = {
  articles: PropTypes.array,
};
