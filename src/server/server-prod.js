import 'dotenv/config';  // load environment variables from
import cors from 'cors';  // creates a cors header to prevent "Cross-Origin Request Blocked errors"
import express from 'express'; // creates express server
import uuidv4 from 'uuid/v4'; // creates unique ideas uudiv4()

//import models and routes

const app = express();

//MIDDLEWARE

app.use(express.json());  // body-parser - parses incoming request stream and makes it accessible on req.body and exposes it as json

//ROUTES
// app.use('/session', routes.session);


// add cors hearer to every request by default
app.use(cors());

// HOMEPAGE TEST
app.get('/', (req, res) => {
    return res.send("Recievd a GET HTTP method");
})

app.listen(process.env.PORT, () => {
    console.log(`Example eapp listening on port ${process.env.PORT}!`);
})


