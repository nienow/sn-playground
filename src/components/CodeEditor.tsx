import React, {useEffect} from 'react';
import {parseText} from "../utils";

const CodeEditor = () => {
  const snippet = parseText();

  useEffect(() => {
    const ide = document.querySelector('playground-ide');
    ide.config = snippet;
  });

  return <playground-ide resizable={true} lineWrapping={false}></playground-ide>
}

export default CodeEditor
