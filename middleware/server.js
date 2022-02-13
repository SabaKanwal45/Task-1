"use strict";
const express = require("express"),
  app = express(),
  expressStaticGzip = require("express-static-gzip");
  

const fs = require("fs");
const cors = require('cors')
const path = __dirname.replace("middleware", "");
const request = require('superagent')


app.set("views", path + "dist");
app.set("view engine", "html");
/**Cores Enabled */
app.use(cors())

app.get("/api/getAccessTokenFromInstagram", async (req, res) => {
  try {
    let code = req.query.code || '';
    if (code && code[code.length-1] === "/"){
      code = code.slice(0,-1);
    }
    request.post(`https://api.instagram.com/oauth/access_token`)
    .type('form')
    .send({ 
      'client_id': process.env.INSTAGRAM_APP_ID || '328249875738232',
      'client_secret': process.env.INSTAGRAM_APP_SECRET || 'ef4f3e8fb8600e146051088d7ec0768a',
      'grant_type': 'authorization_code',
      'redirect_uri': process.env.INSTAGRAM_AUTH_URL || 'https://localhost:8080/auth/',
      'code': code
    })
    .end(function (error, response) {
      //console.log("ERROR ", err);
      if(error){
        if(error && error.response && error.response.error && error.response.error.text){
          return res.status(400).json(JSON.parse(error.response.error.text));
        }
        return res.status(400).json({});
      }
      if (error == null && response && response.body) {
        console.log(response.body)
        return res.status(200).json(response.body);
      } else {
        return res.status(400).json({});
      }
    })
   // res.json(res);
  } catch(err){
    console.log(err);
  }
})

/** Need to serve from server only for production */
if(process.env.NODE_ENV === 'production'){
  app.get("*", function (req, res, next) {
    const url = req.originalUrl;
    if (url && url.indexOf('.') >= 0) {
      next();
      return;
    }
    fs.readFile(
      path + "dist/index.html",
      "utf8",
      function (err, data) {
        if (err && !data) {
          res.send("Something bad happened");
        } 
        res.send(data);
      }
    );
  });
  app.use(expressStaticGzip(path + "dist"));
  app.use("*", expressStaticGzip(path + "dist"));
}
app.listen(process.env.PORT || 3000)

