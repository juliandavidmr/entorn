var entorn = require('../index');

console.log("List:" + JSON.stringify(entorn.list()));

console.log("java is installed? " + entorn.hasJavaHome());

console.log("where java is installed? " + entorn.getJavaHome());

console.log("What is the name of the user of this computer? ", entorn.User());

console.log("You have it set android? ", entorn.hasAndroidHome());

console.log("has axs?", entorn.has("axs"));

console.log("or, has SESSION?", entorn.has("SESSION"));

console.log("get NODE_PATH", entorn.get("NODE_PATH"));

console.log("Similary: ", entorn.similary("JAVA"));

// console.log("Set: ", entorn.set("YOUR_ENV_VAR", "ANY VALUES"));
