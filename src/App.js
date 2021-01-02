import { useCallback, useEffect, useState } from "react";

import { Grid } from "semantic-ui-react";
import getRandomIdea from "./getRandomIdea";
import useRandomColorPair from "./useRandomColorPair";

export default function App() {
  const [idea, setIdea] = useState();
  const [colorPair, randomize] = useRandomColorPair();

  const generate = useCallback(() => {
    const newIdea = getRandomIdea();
    setIdea(newIdea);
    randomize();
  }, [randomize]);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <Grid
      style={{
        backgroundColor: colorPair ? colorPair[0] : "#000000",
        height: "100vh",
      }}
      onClick={() => {
        generate();
      }}
    >
      <Grid.Row verticalAlign="middle">
        <Grid.Column textAlign="center">
          <p
            style={{
              color: colorPair ? colorPair[1] : "#ffffff",
              fontSize: "2em",
              fontFamily: "Josefin Sans",
            }}
          >
            {idea}
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
