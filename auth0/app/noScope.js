const axios = require("axios");
var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-0i0nujmk.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"sxTFCKrgbcabmlfwxcD4C5qJK8SGHryQ","client_secret":"6oZS84-v5cLtk0q85Ut8ZvQ6SQOpShuh0Lbr05gJQSIyQTRFjPbMHCwxaHV361w3","audience":"http://localhost:3001","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
 
 const data= JSON.parse(body).access_token

 const callApiOptions = { 
    method: "GET",
    url: "http://localhost:3001/api/private",
    headers: { "authorization": `Bearer ${data}` },
  };
  
  axios(callApiOptions)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

