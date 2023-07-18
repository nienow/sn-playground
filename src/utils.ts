import snApi from 'sn-extension-api';

export const parseText = () => {
  const text = snApi.text;
  if (text?.indexOf('{') === 0) {
    try {
      const parsedData = JSON.parse(text);
      if (parsedData.files) {
        return parsedData;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return {
    'files': {
      'index.html': {
        'label': 'html',
        'content': `<!-- playground-hide --><html><head><script type=\"module\" src=\"javascript.js\"></script><link rel=\"stylesheet\" href=\"styles.css\"></head><body><!-- playground-hide-end --><div>Hello World</div><!-- playground-hide --></body></html><!-- playground-hide-end -->`
      },
      'javascript.js': {
        'label': 'js',
        'contentType': 'text/javascript',
        'content': ``
      },
      'styles.css': {
        'label': 'css',
        'content': `/* playground-hide */body {background-color: #eee;}/* playground-hide-end */`
      }
    }
  };

};
