// I stored the contacts as objects within an array
let contacts = [
    { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk" },
    { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
    { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

// For this part, I used "contact.push" to add a new contact into the old list
contacts.push({
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
});

// For this part I displayed the  first and last contact using the length property
let first = contacts[0];
let last = contacts[contacts.length - 1];

// This displays the first and last contact info from the list
console.log(`${first.name} / ${first.phone} / ${first.email}`);
console.log(`${last.name} / ${last.phone} / ${last.email}`);