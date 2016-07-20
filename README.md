# Entorn

List and manages all system environment variables.

## Installation

```bash
$ npm install entorn --save
```

## Usage

```javascript


console.log("List all environment variables:" + entorn.list());

console.log("CPUs: ", entorn.cpus); // list of all CPU

console.log("Free memory: ", entorn.free);

console.log("Similary: ", entorn.similary("NODE")); // list of all variables similar environment

console.log("have java installed? " + entorn.hasJavaHome()); // true | false

console.log("where java is installed? " + entorn.getJavaHome()); // string dir folder java

console.log("What is the name of the user of this computer? ", entorn.User()); // username of the session

console.log("You have it set android? ", entorn.hasAndroidHome()); // true | false

console.log("has axs?", entorn.has("axs")); // true | false

console.log("or, has SESSION?", entorn.has("SESSION")); // true | false

console.log("get NODE_PATH", entorn.get("NODE_PATH")); // string dir folder

//console.log("Set: ", entorn.set("YOUR_ENV_VAR", "ANY VALUES"));

console.log("CPUs: ", entorn.cpus);

console.log("Free memory: ", entorn.free);

console.log("Network Interfaces: ", entorn.networkInterfaces);

console.log("or Network Interfaces: ", entorn.ni);

console.log("Platform: ", entorn.platform); // 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'

console.log("Total memory: ", entorn.totalmem);

console.log("Current folder: ", entorn.current); // Returns the current working directory of the Node.js process.  Similiar to command "pwd" on bash linux

console.log("Version nodejs: ", entorn.version);

console.log("or Version nodejs: ", entorn.v);

console.log("Detail Nodejs: ", entorn.vdetail);

/**
 * [listmodules listing nodemodules globals]
 */
entorn.listmodules(function (err, list) {
  if (err) console.log("ERROR", err);
  console.log("Listing nodemodules globals:", list);
});

/**
 * [exec command in the shell or cmd]
 */
entorn.exec("atom .", function (err, stdout) {
  if (err) console.log("ERROR", err);
  console.log("Result:", stdout);
});
```
