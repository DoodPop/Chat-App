"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config = {
    user: 'avnadmin',
    host: 'pg-3e7f2846-postgresqldb.g.aivencloud.com',
    database: 'chatapp',
    password: 'AVNS_C4x7Sfu9yg1PN9RxchX',
    port: 15264,
};
const client = new pg_1.Client(config);
client.connect()
    .then(() => {
    console.log('Connected to the database');
    const userData = {
        email: 'user@example.com',
        name: 'John Doe',
    };
    const query = {
        text: 'INSERT INTO users(user_name, user_gmail) VALUES($1, $2)',
        values: [userData.name, userData.email],
    };
    client.query(query)
        .then(() => {
        console.log('User information inserted into the database');
    })
        .catch((err) => {
        console.error('Error inserting user information into the database:', err);
    })
        .finally(() => {
        client.end();
    });
})
    .catch((err) => {
    console.error('Error connecting to the database:', err);
});
//# sourceMappingURL=db.js.map