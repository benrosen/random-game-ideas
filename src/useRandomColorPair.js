import { useCallback, useEffect, useState } from "react";

import getColorPair from "random-color-pair";

export default function useRandomColorPair() {
  const [colorPair, setColorPair] = useState();

  const randomize = useCallback(() => {
    const newPair = getColorPair();
    setColorPair(newPair);
  }, []);

  useEffect(() => {
    randomize();
  }, [randomize]);

  return [colorPair, randomize];
}
