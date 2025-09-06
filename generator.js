const fs = require('fs');

const NUM_USERS = 5000;

// Gren type alias
const typeAlias = `
type alias User =
    { id : Int
    , name : String
    , email : String
    }

`;

// Function to create a Gren-formatted user record
function createGrenUser(id) {
    return `{ id = ${id}, name = "User ${id}", email = "user${id}@example.com" }`;
}

// Create all users
const users = [];
for (let i = 1; i <= NUM_USERS; i++) {
    users.push(createGrenUser(i));
}

// Combine all into a valid Gren list
const usersList = `users : List User\nusers =\n    [\n        ${users.join(',\n        ')}\n    ]\n`;

// Full output
const output = typeAlias + usersList;

// Write to file
fs.writeFileSync('gren_users_data.gren', output);
console.log('✅ Gren data written to gren_users_data.gren');

