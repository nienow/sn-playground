import React from 'react';

import './index.scss';
import * as blah from 'playground-elements';

import {createRoot} from "react-dom/client";
import CodeEditor from "./components/CodeEditor";
import snApi from "sn-extension-api";

console.log(!blah);

const root = createRoot(document.getElementById('root'));

export const rerenderRoot = () => {
  root.render(
    <React.StrictMode>
      <CodeEditor/>
    </React.StrictMode>
  );
};

snApi.initialize({
  debounceSave: 400
});

snApi.subscribe(() => {
  rerenderRoot();
});
