class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string){}

  markDone(){
    this.done = true;
  }

  // Here we've created a method called markDone(). When called upon a Task object, it will change its done property from false to true.

}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));
console.log(tasks);

tasks[0].markDone();

//now in the console the 'medium' task is set as done: true;

for(var task of tasks) {
  console.log(task);
}


// Note that TypeScript requires you define strings with single quotes('string!'). You will receive errors if your strings contain double quotes ("string!").


// If constructor() parameters share the exact same name as class properties (like description, or priority in the example above), TypeScript will automatically assign them to a public property of the same name and type.

// class Thing {
//   propertyName: type = defaultValue;
// }
