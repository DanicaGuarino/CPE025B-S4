const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// This is the labels for user input
readline.question("Enter width: ", (w) => {
  readline.question("Enter height: ", (h) => {
    readline.question("Enter length: ", (l) => {
      
      // This part is for converting strings to numbers and calculate
      let width = Number(w);
      let height = Number(h);
      let length = Number(l);
      let volume = width * height * length;

      console.log(`Calculated box volume is ${volume}`);
      readline.close();
    });
  });
});