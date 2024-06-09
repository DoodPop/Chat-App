"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var config = {
    user: 'avnadmin',
    host: 'pg-3e7f2846-postgresqldb.g.aivencloud.com',
    database: 'chatapp',
    password: 'AVNS_C4x7Sfu9yg1PN9RxchX',
    port: 15264,
};
var client = new pg_1.Client(config);
client.connect()
    .then(function () {
    console.log('Connected to the database');
    var userData = {
        email: 'user@example.com',
        name: 'John Doe',
    };
    var query = {
        text: 'INSERT INTO users(email, name) VALUES($1, $2)',
        values: [userData.email, userData.name],
    };
    client.query(query)
        .then(function () {
        console.log('User information inserted into the database');
    })
        .catch(function (err) {
        console.error('Error inserting user information into the database:', err);
    })
        .finally(function () {
        client.end();
    });
})
    .catch(function (err) {
    console.error('Error connecting to the database:', err);
});
