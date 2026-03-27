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

// This is the Main Menu Loop: It enclose the entire logic in a loop that keeps the program running until the user explicitly types "quit".
function mainMenu() {
    rl.question(
        "\nChoose an action: show / all / add / search / quit\n",
        function(action) {

        // Advanced Menu Options: Conditional execution based on the user's choice

        // This is for displaying a specific contact. If the user chooses this, ask for an index number.
        // If the index exists, show that contact; otherwise, show an error message.
        if (action === "show") {
            rl.question("Enter contact index (starting from 1): ", function(indexStr) {let index = parseInt(indexStr) - 1;
                if (!isNaN(index) && index >= 0 && index < contacts.length) {
                    let c = contacts[index];
                    console.log(`Contact ${index + 1}: ${c.name} / ${c.phone} / ${c.email}`); // MY OUTPUT
                } else {
                    console.log("Error: Invalid index.");}
                mainMenu(); // This returns to the main menu after showing the contact or if there was an error with the index
            });

        // This is for displaying all contacts in the list 
        } else if (action === "all") {
            console.log("\nAll Contacts:"); // MY OUTPUT
            for (let i = 0; i < contacts.length; i++) {let c = contacts[i];
            console.log(`${i + 1}. ${c.name} / ${c.phone} / ${c.email}`);}
            
        mainMenu(); // return to main menu

        // This is for add: Add a new contact. Prompt for Name, Phone, and Email separately.
        // Crucial: Only add the contact if all three fields are filled (not empty).
        } else if (action === "add") {
            rl.question("Enter Name: ", function(name) {
            rl.question("Enter Phone: ", function(phone) {
            rl.question("Enter Email: ", function(email) {

                if (name && phone && email) {
                contacts.push({ name, phone, email });
                console.log(`New Contact Added: ${name} / ${phone} / ${email}`); 
           } else {
                console.log("Error: All fields are required. Contact not added.");}
                
                mainMenu(); 

                    });
                });
            });

        // This is for searching: It ask the user for a Name. Use a loop to check if that name exists in your contacts.
        // If found, display their phone and email. If not found, alert "Contact not found".
        } else if (action === "search") {
            rl.question("Enter Name to search: ", function(searchName) {
            let found = false;
                for (let i = 0; i < contacts.length; i++) {
                    if (contacts[i].name.toLowerCase() === searchName.toLowerCase()) {
                        console.log(`Found: ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`); // MY OUTPUT
                        found = true; break;
                    }
                }
                if (!found) {
                    console.log("Contact not found."); // MY OUTPUT
                }
                mainMenu(); // return to main menu
            });

        //This is for quitting the program. If the user types "quit", exit the program gracefully with a goodbye message.
        } else if (action === "quit") {
            console.log("Exiting Contact Manager...");
            rl.close();

        // This is for handling invalid action input from the user. If the user types something that is not one of the valid actions, show an error message and return to the main menu.
        } else {
            console.log("Invalid action. Please enter show, all, add, search, or quit."); // MY OUTPUT
            mainMenu(); // return to main menu
        }
    });
}

// Start the main menu loop
mainMenu();