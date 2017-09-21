# Boatit

Get your text ship shape with Boatit. Replace all instances of boat with ⛵️.

### Useage

```
    npm i --save boatit
```

In your code.

```
const Boatit = require('boatit');

const boatit = new Boatit();

process.stdin
    .pipe(boatit)
    .pipe(process.stdout)

```