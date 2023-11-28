export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const innerTask = false;
    const innerTask2 = true;
    
    task = innerTask; // Assign the inner variables to outer scope variables
    task2 = innerTask2; // Assign the inner variables to outer scope variables
  }

  return [task, task2];
}
