import Sentencer from "sentencer";
import templates from "./templates";

export default function getRandomIdea() {
  const template = templates[Math.floor(Math.random() * templates.length)];
  const idea = Sentencer.make(template);
  return idea;
}
