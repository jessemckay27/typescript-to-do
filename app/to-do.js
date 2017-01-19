var Task = (function () {
    function Task(descriptionParameter, priorityParameter) {
        this.done = false;
        this.description = descriptionParameter;
        this.priority = priorityParameter;
    }
    return Task;
}());
var tasks = [];
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Do laundry.', 'High'));
console.log(tasks);
// Note that TypeScript requires you define strings with single quotes('string!'). You will receive errors if your strings contain double quotes ("string!").

// Because we've made changes to our .ts file, we have to re-compile to see them reflected in the browser:

// $ tsc app/to-do.ts  (compiler command)
