// This is for the readline module to allow user input in the terminal
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


// FUCNTIONS FOR CONTACTS MANAGEMENT


// showContact:  this shows one contact using index
function showContact(contactList, index) {

    // To check if contactList is an array before trying to access it
    if (!(contactList instanceof Array)) {
        console.log("Error: Contacts is not an array.");
        return;
    }

    // To check if the index is valid before trying to access the contact at that index
    if (index >= 0 && index < contactList.length) {
        let c = contactList[index];
        console.log(`Contact: ${c.name} / ${c.phone} / ${c.email}`);
    } else {
        console.log("Error: Invalid index.");
    }
}


// showAllContacts:  this displays all contacts
function showAllContacts(contactList) {

    // To check if contactList is an array before trying to access it
    if (!(contactList instanceof Array)) {
        console.log("Error: Contacts is not an array.");
        return;
    }

    console.log("\nAll Contacts:");

    for (let i = 0; i < contactList.length; i++) {
        let c = contactList[i];
        console.log(`${i + 1}. ${c.name} / ${c.phone} / ${c.email}`);
    }
}


// addNewContact:  this adds a new contact
function addNewContact(contactList, name, phone, email) {

    // To check if contactList is an array before trying to access it
    if (!(contactList instanceof Array)) {
        console.log("Error: Contacts is not an array.");
        return;
    }

    // To check if all data has value
    if (name && phone && email) {

        contactList.push({
            name: name,
            phone: phone,
            email: email
        });

        console.log("New contact added successfully.");

    } else {
        console.log("Error: All fields are required.");
    }
}


// This is for the main menu loop that will repeatedly ask the user for an action until they choose to quit. 
// It uses the functions defined above to perform the actions based on user input.


// This is the main menu loop
function mainMenu() {

    rl.question(
        "\nChoose an action: show / all / add / quit\n",
        function(action) {

        if (action === "show") {

            rl.question("Enter contact index (starting from 1): ", function(num) {let index = parseInt(num) - 1;

            showContact(contacts, index);

            mainMenu();
        
        });


        } else if (action === "all") {

            showAllContacts(contacts);

            mainMenu();


        } else if (action === "add") {

            rl.question("Enter name: ", function(name) {
            rl.question("Enter phone: ", function(phone) {
            rl.question("Enter email: ", function(email) {

            addNewContact(contacts, name, phone, email);

                        mainMenu();
                    });
                });
            });


        } else if (action === "quit") {

            console.log("Program ended.");
            rl.close();


        } else {

            console.log("Invalid option.");
            mainMenu();
        }
    });
}


// Start the main menu loop
mainMenu();