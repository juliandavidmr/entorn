var entorn = require('../index');

console.log("List:" + entorn.list());

console.log("have java installed? " + entorn.hasJavaHome());

console.log("where java is installed? " + entorn.getJavaHome());

console.log("What is the name of the user of this computer? ", entorn.User());

console.log("You have it set android? ", entorn.hasAndroidHome());

console.log("has ass?", entorn.has("ass"));

console.log("or, has SESSION?", entorn.has("SESSION"));

console.log("get NODE_PATH", entorn.get("NODE_PATH"));
