import path from 'path';
import 'dotenv/config';  // load environment variables from
import cors from 'cors';  // creates a cors header to prevent "Cross-Origin Request Blocked errors"
import express from 'express'; // creates express server

import webpack from 'webpack';
import webpackDevMilddleWare from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.config.js';

import uuidv4 from 'uuid/v4'; // creates unique ideas uudiv4()

//import models and routes

//MIDDLEWARE


const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config);

app.use(webpackDevMilddleWare(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));



// app.use(express.json());    // body-parser - parses incoming request stream and makes it accessible on req.body and exposes it as json

//ROUTES
// app.use('/session', routes.session);


// add cors hearer to every request by default
// app.use(cors());

// HOMEPAGE TEST
app.get('/test', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next (err);
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
})



app.get('/test', (req, res) => {
    return res.send("Recievd a GET HTTP method");
})

const PORT = process.env.PORT || 8080;

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
})


