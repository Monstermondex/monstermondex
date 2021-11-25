import { useParams, Link } from "react-router-dom";
import { monstermons } from "./config/monstermons";

export function MonstermonDetailPage() {
  const { monstermonId } = useParams();
  const monstermon = monstermons.find((m) => m.id === monstermonId);

  return (
    <div>
      <Link to="/">Back to list</Link>
      <h3>
        Monstermon {monstermon.id}: {monstermon.name}
      </h3>

      <img src={monstermon.image} style={{ width: "50%" }} />
    </div>
  );
}
