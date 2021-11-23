export function Monstermon({ id, image }) {
  return (
    <div className="monstermon-card">
      <img src={image} />
      <p>{id}</p>
    </div>
  );
}
