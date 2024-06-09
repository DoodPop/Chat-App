"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config = {
    user: 'avnadmin',
    host: 'pg-3e7f2846-postgresqldb.g.aivencloud.com',
    database: 'chatapp',
    password: 'your_password',
    port: 15264,
};
const client = new pg_1.Client(config);
client.connect()
    .then(() => {
    console.log('Connected to the database');
})
    .catch((err) => {
    console.error('Error connecting to the database:', err);
});
//# sourceMappingURL=db.js.map