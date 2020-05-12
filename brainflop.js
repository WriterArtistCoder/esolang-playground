function brainflop_run(code, stdin) {
  let input = stdin;
  let output = "";
  
  let memory = [];
  for (let i = 0; i < 1023; i++) {
    memory.push(0);
  }
  
  let p = 0;
  
  for (let j = 0; j < code.length; j++) {
    switch (code[j]) {
      case "+":
        memory[p]++;
        break;
      
      case "-":
        memory[p]--;
        break;
      
      case "<":
        p--;
        if (p < 0) {
          p = 1023;
        }
        break;
      
      case ">":
        p++;
        if (p > 1023) {
          p = 0;
        }
        break;
      
      case "*":
        if (memory[p] == 0 && input.length > 0) {
          memory[p] = input.charCodeAt(0);
          input = input.slice(1);
        } else {
          output += String.fromCharCode(memory[p]);
        }
        break;
      
      case "/":
        if (memory[p] == 0) {
          j++;
        } else {
          p++;
          j += memory[p]-1;
        }
        break;
      
      case "#":
        memory[p] = 0;
        break;
      
      default:
        break;
    }
  }
  
  return output;
}