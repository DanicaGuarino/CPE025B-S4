// I created a team directory with objects representing each team member, including their name, role, skills, and availability. 
let teamDirectory = [
    { name: "Leo Brooks", role: "Designer", skills: ["UI", "UX", "Figma"], available: true },
    { name: "Sasha Ivana", role: "Developer", skills: ["HTML", "CSS", "JS"], available: false },
    { name: "Jordan Lee", role: "Manager", skills: ["Planning", "Agile"], available: true }
];

// I added a new specialist to the directory
teamDirectory.push({ 
    name: "Casey Moore", 
    role: "QA Engineer", 
    skills: ["Testing", "Debugging"], 
    available: true });

// I updated the availability status of one of the team members
teamDirectory[1].available = true;



// I accessed and printed specific information about the team members
console.log(teamDirectory[0].name + " - First Skill: " + teamDirectory[0].skills[0]);
let lastMember = teamDirectory[teamDirectory.length - 1];
console.log(lastMember.name + " - Total Skills: " + lastMember.skills.length);
console.log("Total People: " + teamDirectory.length);
