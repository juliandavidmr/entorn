exports.list = function() {
	return process.env;
}

/**
 * JAVA
 */
exports.hasJavaHome = function() {
	return process.env['JAVA_HOME'] != undefined;
}

exports.getJavaHome = function() {
	return process.env['JAVA_HOME'];
}

/**
 * ANDROID
 */
exports.hasAndroidHome = function() {
	return process.env['ANDROID_HOME'] != undefined;
}

exports.getAndroidHome = function() {
	return process.env['ANDROID_HOME'];
}


/**
 * USER
 */
exports.User = function() {
	return process.env['USER'];
}


/**
 * Similary
 */
exports.similary = function(env) {
	var l = process.env;
	var result = [];
	var keys = Object.keys(l);
	env = env.toString().toLowerCase();
	keys.forEach(elem => {
		if (elem.toString().toLowerCase().indexOf(env) > -1) {
			result.push(JSON.parse('{"' + elem + '": "' + l[elem] + '"}'));
		}
	});
	return result;
}

/**
 * SET
 */
/*exports.set = function(env, value) {
	if (typeof env === 'string' && typeof value === 'string') {
		console.log(process.env[env] = value);
	} else {
		return "Incorrect parameter"
	}
}*/


exports.has = function(env) {
	if (typeof env === 'string') {
		return process.env[env] != undefined;
	} else {
		return "Incorrect parameter"
	}
}

exports.get = function(env) {
	if (typeof env === 'string') {
		return process.env[env];
	} else {
		return "Incorrect parameter"
	}
}
