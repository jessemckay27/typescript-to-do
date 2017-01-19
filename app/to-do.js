var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
// Note that TypeScript requires you define strings with single quotes('string!'). You will receive errors if your strings contain double quotes ("string!").
// If constructor() parameters share the exact same name as class properties (like description, or priority in the example above), TypeScript will automatically assign them to a public property of the same name and type.
// class Thing {
//   propertyName: type = defaultValue;
// }
