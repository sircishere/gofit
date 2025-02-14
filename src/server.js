import express from "express";
import axios from "axios";
import mysql from "mysql2";
import 'dotenv/config';
import oidc from 'express-openid-connect';
import session from 'express-session';
import cors from 'cors';

const app = express();


const {auth, requiresAuth} = oidc;

const config = {
  authRequired: process.env.AUTHREQUIRED,
  auth0Logout: process.env.AUTH0LOGOUT,
  baseURL: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  secret: process.env.SESSION_SECRET,
  session: {
    rolling: true,
    cookie: { secure: false }  // Set to `true` if using HTTPS
  }
};

app.use(cors({
  origin: [
    'http://localhost:5173'
  ],
  credentials: true,
  exposedHeaders: ['set-cookie']
}));


// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

//retrieves the name of the user
app.get('/getName',(req,res) => {
  if (!req.oidc.isAuthenticated()) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  
  res.json({ name: req.oidc.user.given_name }); // Send JSON response
});

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  // res.send(req.oidc.isAuthenticated() ?   res.redirect(`http://localhost:5173/auth-success?token=${req.oidc.idToken}`)

  res.redirect(`http://localhost:5173`);

});

// The /profile route will show the user profile as JSON
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.get('/logout', (req, res) => {
  const returnTo = encodeURIComponent('http://localhost:5173/logout-success'); 
  res.redirect(`https://${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${returnTo}`);
});


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
    url: `https://${process.env.API_HOST}/exercises`,
    params: {
      limit: '10',
      offset: '0'
    },
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': process.env.API_HOST,
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
  url: `https://${process.env.API_HOST}/exercises/target/${muscle}`,
  params: {
    limit: '10',
    offset: '0'
  },
  headers: {
    'x-rapidapi-key': process.env.API_KEY,
    'x-rapidapi-host': process.env.API_HOST
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
