import React, { useState, useEffect } from 'react';
import { Image } from "react-native";


export default function ({ style, source, state, duration = 1000, thresehold = 100 }) {
  const [useSource, setUseSource] = useState(source);
  const [opacity, setOpacity] = useState(0);
  const [timeoutFade, setTimeoutFade] = useState(null);

  // on met à jour useSource s'il est non null
  useEffect(() => {
    if (source !== null) {
      setUseSource(source);
      setOpacity(1);
    }
  }, [source]);

  // quand l'opacité change...
  useEffect(() => {
    if (opacity > 0) {
      setTimeoutFade(
        setTimeout(
          () => setOpacity(prevOpacity => prevOpacity - thresehold / duration),
          thresehold,
        ));
    }
    return () => clearTimeout(timeoutFade);
  }, [opacity]);

  useEffect(() => {
    if (timeoutFade !== null) {
      clearTimeout(timeoutFade);
    }
    setOpacity(1);
  }, [state]);

  if (useSource === null) {
    return null;
  }
  return (
      <Image
        source={ useSource }
        style={ [style, { opacity }] }
      />
  );
}
