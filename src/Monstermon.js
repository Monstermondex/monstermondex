export function Monstermon({ id, name, image }) {
  return (
    <div className="monstermon-card" key={id}>
      <img src={image} alt={name} />
      <p>{id}</p>
    </div>
  );
}
