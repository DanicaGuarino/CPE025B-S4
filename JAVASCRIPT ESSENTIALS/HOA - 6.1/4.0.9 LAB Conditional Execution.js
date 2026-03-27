// This is for the readline module to allow user input in the terminal since I am using Node.js
const readline = require("readline");

let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This is for the user input and conditional execution based on the action chosen by the user.
rl.question("Choose an action: first / last / new\n", function(action) {

    // This is for the conditional execution based on the user's choice (MY OUTPUT)
    if (action === "first") {
        let first = contacts[0];
        console.log(`First Contact: ${first.name} / ${first.phone} / ${first.email}`);
        rl.close();

    } else if (action === "last") {
        let last = contacts[contacts.length - 1];
        console.log(`Last Contact: ${last.name} / ${last.phone} / ${last.email}`);
        rl.close();

    } else if (action === "new") {
        // This is for adding a new contact to the list with conditional execution to check if all fields are provided (MY OUTPUT)
        rl.question("Enter name: ", function(name) {
        rl.question("Enter phone: ", function(phone) {
        rl.question("Enter email: ", function(email) {
                    
        // This is for checking if all fields are provided before adding the new contact to the list
    if (name && phone && email) {
        contacts.push({ name, phone, email });
        let last = contacts[contacts.length - 1];
        console.log(`New Contact Added: ${last.name} / ${last.phone} / ${last.email}`);} else {
        console.log("Error: All fields are required. Contact was not added.");}
        
        rl.close();
        
                });
            });
        });
        
        // This is for handling invalid action input from the user (MY OUTPUT)
    } else {
        console.log("Invalid action. Please enter first, last, or new.");
        
        rl.close();
    }
    
});