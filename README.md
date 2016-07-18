# Entorn

List and manages all system environment variables.

## Installation

```bash
$ npm install entorn --save
```

## Usage

```javascript

var entorn = require('entorn');

console.log("List all environment variables:" + entorn.list());

console.log("have java installed? " + entorn.hasJavaHome());  // true | false

console.log("where java is installed? " + entorn.getJavaHome()); // string dir folder java

console.log("What is the name of the user of this computer? ", entorn.User()); // username of the session

console.log("You have it set android? ", entorn.hasAndroidHome()); // true | false

console.log("has ass?", entorn.has("ass")); // true | false

console.log("or, has SESSION?", entorn.has("SESSION")); // true | false

console.log("get NODE_PATH", entorn.get("NODE_PATH")); // string dir folder
```
