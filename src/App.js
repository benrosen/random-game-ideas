import { useCallback, useEffect, useState } from "react";

import { Grid } from "semantic-ui-react";
import getRandomIdea from "./getRandomIdea";

export default function App() {
  const [idea, setIdea] = useState();

  const generate = useCallback(() => {
    const newIdea = getRandomIdea();
    setIdea(newIdea);
  }, []);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <Grid
      style={{ height: "100vh" }}
      onClick={() => {
        generate();
      }}
    >
      <Grid.Row verticalAlign="middle">
        <Grid.Column textAlign="center">
          <p style={{ fontSize: "2em", fontFamily: "Josefin Sans" }}>{idea}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
