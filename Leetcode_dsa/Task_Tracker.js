let teamMembers = [
    { name: 'John', dob: 'Dec 15, 2007', score: 80 },
    { name: 'Ana', dob: 'Jan 15, 2009', score: 75 },
    { name: 'Zion', dob: 'Feb 15, 2011', score: 90 },
];

teamMembers.sort((employee1, employee2) => employee1.score - employee2.score);

console.log("Sorted Team Members by  value of Score (Ascending):", teamMembers);