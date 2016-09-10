// TASK (from Lever interview 7/23): write the parallel function from the async library:
// docs: caolan.github.io/async/docs.html#.parallel

// FN INPUTS: an array of functions (the tasks to be done in a particular order), and a callback
// which takes an error and the results of the array of functions in the same order they were given

// NOTE: each task is a fn that only takes a callback as an argument
// and typically will take a while to run (setTimeout, server/db request, etc.)

// FN OUTPUTS: none (but needs to pass the callback an array of results)
var parallel = function(tasks, callback) {
  // initialize an array to hold the results of each task
  var taskResults = [];
  // keep track of if there was an error or not
  var wasError = false;

  for (var i = 0; i < tasks.length; i++) {
    // invoke each task function, passing in the callback to add the result to the results array
    task(function(err, taskResult) {
      // whether you get an error or not, add each result to our results array at the same index it is in the original task array
      tasks[i] = taskResult;
      if (err) {
        // if you ever get an error, you can run the parallel callback immediately on the error and the results so far
        callback(err, taskResults);
        wasError = true;
      } else {
        // check to see if you've reached the end of the tasks array (and there was no error!)
        if (taskResults.length === tasks.length && !wasError) {
          // if you have, pass the results array to the cb passed into parallel
          callback(null, taskResults);
        }
      }
    });
  }
};
