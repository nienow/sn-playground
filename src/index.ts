import './index.scss';
import * as blah from 'playground-elements';

import snApi from 'sn-extension-api';
import {parseText} from './utils';

console.log(!blah);

snApi.initialize({
  debounceSave: 400
});

snApi.subscribe(() => {
  const snippet = parseText();
  const ide = document.querySelector('playground-ide');
  ide.config = snippet;
});
