"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres',
//     user: 'postgres',
//     password: 'changeinprod!',
// })
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:changeinprod!@localhost/postgres",
});
//Async function to create a users table
function createTableUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const res = yield client.query(`CREATE TABLE users (id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);`);
        console.log(res);
    });
}
// createTableUsers()
function insertData(name, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `INSERT INTO users (name, email) VALUES ($1, $2);`;
            const params = [name, email];
            const result = yield client.query(query, params);
            console.log("Insertion success", result);
        }
        catch (error) {
            console.log("Error connecting to DB");
        }
        finally {
            yield client.end();
        }
    });
}
// insertData('Issac Newton', 'issac.newton@gmail.com');
function getData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const getQuery = `SELECT * FROM users WHERE email = $1`;
            const params = [email];
            const res = yield client.query(getQuery, params);
            if (res.rows.length > 0) {
                console.log("User Found:");
                console.log(`ID: ${res.rows[0].id}, Name: ${res.rows[0].name}, Email: ${res.rows[0].email}, Created At: ${res.rows[0].created_at}`);
                return res.rows[0];
            }
            else {
                console.log("No user found with given email");
                return null;
            }
        }
        catch (error) {
            console.log("Error connecting to DB");
        }
        finally {
            yield client.end();
        }
    });
}
getData("issac.newton@gmail.com");
