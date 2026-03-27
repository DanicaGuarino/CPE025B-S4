// This is for the readline module to allow user input in the terminal
const readline = require("readline");


// The Initial Contact List
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


// This is for the functions that will manage the contacts.
// Each function takes the contact list as a parameter and performs a specific action (show one contact, show all contacts, add a new contact, sort contacts). 


// This is for showing one contact based on the index provided by the user. 
// It checks if the index is valid and if the contact list is an array before trying to access the contact at that index.
function showContact(contactList, index) {

    if (!(contactList instanceof Array)) {
        console.log("Error: Contacts is not an array.");
        return;
    }

    if (index >= 0 && index < contactList.length) {

        let c = contactList[index];

        console.log(
            `${c.name} / ${c.phone} / ${c.email}`
        );

    } else {

        console.log("Invalid index.");
    }
}


// This is for showing all contacts in the list. 
function showAllContacts(contactList) {

    if (!(contactList instanceof Array)) {
        console.log("Error: Contacts is not an array.");
        return;
    }

    console.log("\nAll Contacts:\n");

    for (let i = 0; i < contactList.length; i++) {

        let c = contactList[i];

        console.log(
            `${i + 1}. ${c.name} / ${c.phone} / ${c.email}`
        );
    }
}


// This is for adding a new contact to the list. 
function addNewContact(contactList, name, phone, email) {

    if (!(contactList instanceof Array)) {
        console.log("Error: Contacts is not an array.");
        return;
    }

    if (name && phone && email) {

        contactList.push({
            name: name,
            phone: phone,
            email: email
        });

        console.log("New contact added.");

    } else {

        console.log("All fields are required.");
    }
}


// This is where the sorting of contacts happens based on the field provided by the user (name, phone, or email).
function sortContacts(contactList, field) {

    if (!(contactList instanceof Array)) {
        console.log("Error: Contacts is not an array.");
        return;
    }

    if (field === "name") {

        contactList.sort(function (a, b) {

            if (a.name > b.name) {
                return 1;
            } else {
                return -1;
            }
        });

    } else if (field === "phone") {

        contactList.sort(function (a, b) {

            if (a.phone > b.phone) {
                return 1;
            } else {
                return -1;
            }
        });

    } else if (field === "email") {

        contactList.sort(function (a, b) {

            if (a.email > b.email) {
                return 1;
            } else {
                return -1;
            }
        });

    } else {

        console.log("Invalid sort option.");
        return;
    }

    console.log("Contacts sorted.");
}


// This is for the main menu loop that will repeatedly ask the user for an action until they choose to quit.



function mainMenu() {

    rl.question(
        "\nChoose: show / all / add / sort / quit\n> ",
        function (action) {

            if (action === "show") {

                rl.question("Enter index (starting from 1): ", function (num) {

                    let index = parseInt(num) - 1;

                    showContact(contacts, index);

                    mainMenu();
                });


            } else if (action === "all") {

                showAllContacts(contacts);

                mainMenu();


            } else if (action === "add") {

                rl.question("Enter name: ", function (name) {

                rl.question("Enter phone: ", function (phone) {

                rl.question("Enter email: ", function (email) {addNewContact(contacts, name, phone, email);


                mainMenu();
                        });
                    });
                });


            } else if (action === "sort") {

                rl.question(
                    "Sort by: name / phone / email\n> ",
                    function (field) {

                        sortContacts(contacts, field);

                        mainMenu();
                    }
                );


            } else if (action === "quit") {

                console.log("Program ended.");

                rl.close();


            } else {

                console.log("Invalid option.");

                mainMenu();
            }
        }
    );
}


// This is for starting the main menu loop when the program is run.
mainMenu();