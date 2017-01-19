class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string){}
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);

for(var task of tasks) {
  console.log(task);
}


// Note that TypeScript requires you define strings with single quotes('string!'). You will receive errors if your strings contain double quotes ("string!").


// If constructor() parameters share the exact same name as class properties (like description, or priority in the example above), TypeScript will automatically assign them to a public property of the same name and type.

// class Thing {
//   propertyName: type = defaultValue;
// }
