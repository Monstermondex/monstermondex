import drillixImage from "../images/drillix.jpg";
import krationImage from "../images/kration.jpg";
import krokalisImage from "../images/krokalis.jpg";
import puncinoImage from "../images/puncino.jpg";
import sarulyImage from "../images/saruly.jpg";
import dudriaImage from "../images/dudria.jpg";
import shadowyImage from "../images/shadowy.jpg";

export const monstermons = [
  {
    id: "001",
    name: "Drillix",
    image: drillixImage,
    categories: [],
    hp: 180,
    attacks: [
      ["Drill", 60],
      ["Grassstorm", 100],
      ["Leaf-kuter", 90]
    ]
  },
  {
    id: "002",
    name: "Krokalis",
    image: krokalisImage,
    categories: []
  },
  {
    id: "003",
    name: "Puncino",
    image: puncinoImage,
    categories: ["Halloween"]
  },
  {
    id: "004",
    name: "Kration",
    image: krationImage,
    categories: ["Halloween"],
    hp: 270,
    attacks: [
      ["shadowClaw", 130],
      ["skellyBeam", 110],
      ["SuperShadow", 120]
    ]
  },
  {
    id: "005",
    name: "Saruly",
    image: sarulyImage,
    categories: ["Halloween"]
  },
  {
    id: "006",
    name: "Dudria",
    image: dudriaImage,
    categories: []
  },
  {
    id: "007",
    name: "Shadowy",
    image: shadowyImage,
    categories: ["Halloween"]
  }
];
