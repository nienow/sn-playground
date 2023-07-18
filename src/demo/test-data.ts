export interface TestData {
  title: string;
  text: string;
  meta?: any;
}

const EMPTY = {
  title: 'Hello World',
  text: ''
};

const COUNTER = {
  title: 'Counter',
  text: JSON.stringify({
    'files': {
      'index.html': {
        'label': 'html',
        'content': `<!-- playground-hide --><html><head><script type=\"module\" src=\"javascript.js\"></script><link rel=\"stylesheet\" href=\"styles.css\"></head><body><!-- playground-hide-end --><button id="btn">Click Me</button>\n<div id="count">Button has been clicked 0 times</div><!-- playground-hide --></body></html><!-- playground-hide-end -->`
      },
      'javascript.js': {
        'label': 'js',
        'contentType': 'text/javascript',
        'content': `let count = 0;\ndocument.getElementById('btn').addEventListener('click', function() {\n  document.getElementById('count').innerHTML = 'Button has been clicked ' + (++count) + ' times';\n}) `
      },
      'styles.css': {
        'label': 'css',
        'content': `/* playground-hide */body {background-color: #eee;}/* playground-hide-end */button {\n  margin: 10px;\n  padding: 10px\n}`
      }
    }
  })
};

export const TEST_DATA: TestData[] = [COUNTER, EMPTY];
