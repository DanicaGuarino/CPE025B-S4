// This is for the readline module to allow user input in Node.js
const readline = require("readline");


// This is the data structure for the contacts. Each contact has a name, role, skills (array), and availability status (boolean).

let contacts = [
    {
        name: "Linus Torvalds",
        role: "System Admin",
        skills: ["Linux", "Git", "Kernels"],
        available: true
    },
    {
        name: "Ada Lovelace",
        role: "Logic Analyst",
        skills: ["Algorithms", "Math", "Analytics"],
        available: false
    },
    {
        name: "Alan Turing",
        role: "Cryptographer",
        skills: ["Logic", "Enigma", "Security"],
        available: true
    }
];



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// This is the mainloop that will repeatedly ask the user for an action until they choose to quit.

function mainMenu() {

    rl.question(
        "\nChoose: show / all / add / search / quit\n> ",
        function (action) {

           
            if (action === "show") {

                rl.question("Enter index (starting from 1): ", function (num) {

                    let index = parseInt(num) - 1;

                    if (index >= 0 && index < contacts.length) {

                        let c = contacts[index];

                        console.log("\nContact Info:");
                        console.log("Name:", c.name);
                        console.log("Role:", c.role);
                        console.log("First Skill:", c.skills[0]);

                    } else {

                        console.log("Invalid index.");
                    }

                    mainMenu();
                });


            // This is for the option to show all the contacts in the list. 
            // It will loop through the contacts and display their name, role, and first skill.
            } else if (action === "all") {

                console.log("\nAll Contacts:\n");

                for (let i = 0; i < contacts.length; i++) {

                    console.log(`${i + 1}. ${contacts[i].name}`);
                }

                mainMenu();


            // This is for adding the contact to the list. 
            // IThis will ask the user for the name, role, and skill of the new contact.  
            } else if (action === "add") {

                rl.question("Enter name: ", function (name) {

                rl.question("Enter role: ", function (role) {

                rl.question("Enter skill: ", function (skill) {

                            // Validation: Check if fields are not empty
                            if (name && role && skill) {

                                contacts.push({
                                    name: name,
                                    role: role,
                                    skills: [skill],
                                    available: true
                                });

                                console.log("New contact added.");

                            } else {

                                console.log("Error: All fields are required.");
                            }

                            mainMenu();
                        });
                    });
                });


            // This is for the search option. 
            // It will ask the user for a name and then search through the contacts to find a match.  
            } else if (action === "search") {

                rl.question("Enter name to search: ", function (searchName) {

                    let found = false;

                    for (let i = 0; i < contacts.length; i++) {

                        if (contacts[i].name === searchName) {

                            found = true;

                            let status = contacts[i].available
                                ? "Available"
                                : "Busy";

                            console.log("\nContact Found:");
                            console.log("Role:", contacts[i].role);
                            console.log("Status:", status);

                            break;
                        }
                    }

                    if (!found) {

                        console.log("Contact not found.");
                    }

                    mainMenu();
                });


            //This is for quitting the program. 
            // It will display a goodbye message and then close the readline interface to exit the program.
            } else if (action === "quit") {

                console.log("\nGoodbye! Thank you for using the system.");

                rl.close();
                return;


            // This is for handling invalid options. 
            // If the user enters something that is not one of the valid actions, it will display an error message and then return to the main menu.
            } else {

                console.log("Invalid option.");

                mainMenu();
            }
        }
    );
}


// This is for the main menu loop that will repeatedly ask the user for an action until they choose to quit.

mainMenu();