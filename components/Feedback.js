import React, { useState, useEffect } from 'react';
import { Image } from "react-native";

function getFade(setOpacity, thresehold, duration) {
  return () => setInterval(
      () => {
      setOpacity(prevOpacity => Math.max(0, prevOpacity - thresehold / duration));
    },
    thresehold,
  );
}

export default function ({ style, source, duration = 1000, thresehold = 100 }) {
  const [useSource, setUseSource] = useState(source);
  const [opacity, setOpacity] = useState(0);
  const fade = getFade(setOpacity, thresehold, duration);
  useEffect(() => {
    const fadeInterval = fade();
    return () => clearInterval(fadeInterval);
  }, [])
  // on met à jour useSource s'il est non null
  useEffect(() => {
    if (source !== null) {
      setUseSource(source);
      setOpacity(1);
    }
  }, [source]);
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
