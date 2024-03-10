import { Client } from "pg";

// const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres',
//     user: 'postgres',
//     password: 'changeinprod!',
// })

const client = new Client({
  connectionString:
    "postgresql://Harsh32044:VnNhl2Mx9vwF@ep-wispy-wind-32896131.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
});

//Async function to create a users table

async function createTableUsers() {
  await client.connect();

  const res = await client.query(
    `CREATE TABLE users (id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);`
  );
  console.log(res);
}

async function createTableAddresses() {
  try {
    await client.connect();

    const res = await client.query(
      `CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );`
    );

    console.log(res);
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
}

// createTableUsers();
createTableAddresses();

async function insertData(name: string, email: string) {
  try {
    await client.connect();

    const query = `INSERT INTO users (name, email) VALUES ($1, $2);`;
    const params = [name, email];
    const result = await client.query(query, params);
    console.log("Insertion success", result);
  } catch (error) {
    console.log("Error connecting to DB");
  } finally {
    await client.end();
  }
}

// insertData('Issac Newton', 'issac.newton@gmail.com');

async function getData(email: string) {
  try {
    await client.connect();

    const getQuery = `SELECT * FROM users WHERE email = $1`;
    const params = [email];
    const res = await client.query(getQuery, params);

    if (res.rows.length > 0) {
      console.log("User Found:");
      console.log(
        `ID: ${res.rows[0].id}, Name: ${res.rows[0].name}, Email: ${res.rows[0].email}, Created At: ${res.rows[0].created_at}`
      );
      return res.rows[0];
    } else {
      console.log("No user found with given email");
      return null;
    }
  } catch (error) {
    console.log("Error connecting to DB");
  } finally {
    await client.end();
  }
}

// getData("issac.newton@gmail.com");
