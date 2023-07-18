import './index.scss';
import 'playground-elements';

import snApi from 'sn-extension-api';
import {parseText} from './utils';

snApi.initialize({
  debounceSave: 400
});

const project = document.querySelector('playground-project');
const editor = document.querySelector('playground-file-editor');
let changeListenerInit = false;

snApi.subscribe(() => {
  const snippet = parseText();
  if (snApi.locked) {
    editor.setAttribute('readonly', 'true');
  } else {
    editor.removeAttribute('readonly');
  }

  if (!changeListenerInit) {
    changeListenerInit = true;
    const code = editor.shadowRoot.querySelector('playground-code-editor');
    code.addEventListener('change', () => {
      snApi.text = JSON.stringify(project.config);
    });
  }

  project.config = snippet;
});
