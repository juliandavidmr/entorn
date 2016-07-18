exports.list = function () {
  return process.env;
}

/**
 * JAVA
 */
exports.hasJavaHome = function () {
  return process.env['JAVA_HOME'] != undefined;
}

exports.getJavaHome = function () {
  return process.env['JAVA_HOME'];
}

/**
 * ANDROID
 */
exports.hasAndroidHome = function () {
  return process.env['ANDROID_HOME'] != undefined;
}

exports.getAndroidHome = function () {
  return process.env['ANDROID_HOME'];
}


/**
 * USER
 */
exports.User = function () {
  return process.env['USER'];
}


exports.has = function (env) {
  if (typeof env === 'string') {
    return process.env[env] != undefined;
  } else {
    return "Incorrect parameter"
  }
}

exports.get = function (env) {
  if (typeof env === 'string') {
    return process.env[env];
  } else {
    return "Incorrect parameter"
  }
}
