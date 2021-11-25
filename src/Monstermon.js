import { Link } from "react-router-dom";

export function Monstermon({ id, name, image }) {
  return (
    <Link to={`/monstermons/${id}`}>
      <div className="monstermon-card" key={id}>
        <img src={image} alt={name} />
        <p>{id}</p>
      </div>
    </Link>
  );
}
