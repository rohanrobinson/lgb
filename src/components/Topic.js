export default function Topic({ topicName, onClick }) {
    return (
      <div className="topicTile" onClick={onClick}>
        <h3>{topicName}</h3>
      </div>
    );
  }