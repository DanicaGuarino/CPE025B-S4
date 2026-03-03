// This is for the readline module to allow user input in the terminal since I am using Node.js
const readline = require("readline"); 

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This is for the user input and adding a new contact to the list
rl.question("Enter name: ", (name) => {
rl.question("Enter phone: ", (phone) => {
rl.question("Enter email: ", (email) => {

// This is for adding the new contact to the list
contacts.push({name, phone,email});

 last = contacts.length - 1;

// This is for displaying the first and last contact in the list (MY OUTPUT)
console.log("\nFirst Contact:");
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);

console.log("\nLast Contact:");
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
// End of my output

rl.close();
     });
  });

});

