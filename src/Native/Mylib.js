Elm.Native.Mylib = {};
Elm.Native.Mylib.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Mylib = localRuntime.Native.Mylib || {};
	if (localRuntime.Native.Mylib.values)
	{
		return localRuntime.Native.Mylib.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function log(string)
	{
		return Task.asyncFunction(function(callback) {
			console.log(string);
			return callback(Task.succeed(Utils.Tuple0));
		});
	}


	var getCurrentTime = Task.asyncFunction(function(callback) {
		return callback(Task.succeed(Date.now()));
	});


	return localRuntime.Native.Mylib.values = {
		log: log,
		getCurrentTime: getCurrentTime
	};
};
