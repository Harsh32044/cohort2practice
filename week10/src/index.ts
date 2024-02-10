import { Client } from "pg";

// const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres',
//     user: 'postgres',
//     password: 'changeinprod!',
// })

const client = new Client({
  connectionString: "postgresql://postgres:changeinprod!@localhost/postgres",
});

//Async function to create a users table

async function createTableUsers() {
  await client.connect();

  const res = await client.query(
    `CREATE TABLE users (id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);`
  );
  console.log(res);
}

// createTableUsers()

async function insertData(name: string, email: string) {
  try {
    await client.connect();

    const query = `INSERT INTO users (name, email) VALUES ($1, $2);`;
    const params = [name, email]
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
      console.log(`ID: ${res.rows[0].id}, Name: ${res.rows[0].name}, Email: ${res.rows[0].email}, Created At: ${res.rows[0].created_at}`);
      return res.rows[0];
    } else {
      console.log("No user found with given email");
      return null;
    }
  } catch (error) {
    console.log("Error connecting to DB");
  }

  finally{
    await client.end();
  }
}

getData("issac.newton@gmail.com");