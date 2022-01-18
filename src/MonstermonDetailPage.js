import { useParams, Link } from "react-router-dom";
import { monstermons } from "./config/monstermons";

export function MonstermonDetailPage() {
  const { monstermonId } = useParams();
  const monstermon = monstermons.find((m) => m.id === monstermonId);

  return (
    <div>
      <Link to="/">Back to list</Link>
      <h3>
        Monstermon {monstermon.id}: {monstermon.name}{" "}
        {monstermon.hp ? `(HP ${monstermon.hp})` : null}
      </h3>

      <div style={{ display: "flex" }}>
        <img
          src={monstermon.image}
          style={{ width: "50%" }}
          alt={monstermon.name}
        />

        {monstermon.area ? `Area: ${monstermon.area}` : null}
      </div>
      <div style={{ padding: "10px" }}>
        {monstermon?.attacks ? (
          <ul style={{ padding: 0 }}>
            {monstermon?.attacks?.map(([name, value]) => (
              <li>
                {name}: {value}
              </li>
            ))}
          </ul>
        ) : null}
        {monstermon.hasGiantForm ? "Has" : "Doesn't have"} giant form
      </div>
    </div>
  );
}
