interface TopicProps {
  topicName: string;
  onClick: () => void;
}

export default function Topic({ topicName, onClick }: TopicProps) {
  return (
    <div className="topicTile" onClick={onClick}>
      <h3>{topicName}</h3>
    </div>
  );
}
