import express from "express";
import axios from "axios";
import mysql from "mysql2";

const app = express();

const API_HOST = "exercisedb.p.rapidapi.com"
const API_KEY = "4f0639c89emsh04f8e6abc62c820p13ef26jsndc4976422036"

// Create a connection to the database
const db = mysql.createConnection({
    host: "localhost", 
    user: "root",      
    password: "Cdmcj3298mysql!", 
    database: "mtsfitness",   
    port: 3307 
  });
  
  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err.message);
      return;
    }
    console.log("Connected to the MySQL database.");
  });

// Home
app.get("/", (req, res) => {
  res.send("Hello, Express with ES Modules!");
});

// Example route to fetch data from the users table
app.get("/users", (req, res) => {
    const query = "SELECT * FROM users";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching data:", err.message);
        res.status(500).send("Error fetching data");
        return;
      }
      res.json(results);
    });
  });

//Retrieve list of exercises
app.get("/api/exercises", async (req, res) => {
  const options = {
    method: 'GET',
    url: `https://${API_HOST}/exercises`,
    params: {
      limit: '10',
      offset: '0'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
    }
  };
  
  try {
    const response = await axios.request(options);
    res.json(response.data);

  } catch (error) {
    console.error(error);
  }
});


//Retrieve exercise list for a specific muscle group
app.get("/api/exercises/muscles/:muscle", async (req,res) => {
const { muscle } = req.params;
const options = {
  method: 'GET',
  url: `https://${API_HOST}/exercises/target/${muscle}`,
  params: {
    limit: '10',
    offset: '0'
  },
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST
  }
};

try {
	const response = await axios.request(options);
  res.json(response.data);
} catch (error) {
	console.error(error);
}
});

// Start the exercise server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
