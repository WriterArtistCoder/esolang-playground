
function run_bf(program, stdin) {
  let input = stdin;
  let output = "";
  
  let mem = [];
  for (let j = 0; j < 1024; j++) {
    mem.push(0);
  }
  let p = 0;
  
  for (let i = 0; i < program.length; i++) {
    const jumpToMatching = function() {
      let count = 0;
      while (count != 0 || program[i] != "]") {
        if (program[i] == "[") { count++; }
        if (program[i] == "]") { count--; }
        i++;
      }
    }
    
    const backwardsJump = function() {
      let count = 0;
      while (count != 0 || program[i] != "[") {
        if (program[i] == "]") { count++; }
        if (program[i] == "[") { count--; }
        i--;
      }
    }
    
    switch (program[i]) {
      case ">":
        p++;
        if (p > 1023) { p = 0 }
        break;
      
      case "<":
        p--;
        if (p < 0) { p = 1023 }
        break;
      
      case "+":
        mem[p]++;
        break;
        
      case "-":
        mem[p]--;
        break;
        
      case ".":
        output += String.fromCharCode(mem[p]);
        break;
        
      case ",":
        if (input.length > 0) {
          mem[p] = input.charCodeAt(0);
          input = input.slice(1);
        } else { mem[p] = 0 }
        break;
        
      case "[":
        if (mem[p] == 0) {
          i++;
          jumpToMatching();
        }
        break;
        
      case "]":
        if (mem[p] != 0) {
          i--;
          backwardsJump();
        }
        break;
        
      default:
        break;
    }
  }
  
  return output;
}