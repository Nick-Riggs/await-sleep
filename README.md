# await-sleep

Simple solution for sleeping (waiting) using async/await.

## Installation

`npm install await-sleep`

## Usage

```javascript
const sleep = require('await-sleep');

(async function() {
    console.log('waiting 1 second...');
    await sleep(1000);
    console.log('done!');
})();
```

Shortcut functions:

`await sleep.seconds();`

`await sleep.minutes();`

`await sleep.hours();`

`await sleep.days();`

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Test your code.