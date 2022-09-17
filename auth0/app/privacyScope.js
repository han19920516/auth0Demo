const axios = require("axios");
var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-0i0nujmk.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"qQqAilNxZpAesCLdrX8sbnXgTvFyKoVy","client_secret":"XpdXKXpcZkyy4AowBGhWSsFXJ08E6toYr-NE4UWV4sfyHEgmskKL0J2ceRVQRarj","audience":"http://localhost:3001","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
 
 const data= JSON.parse(body).access_token

 const callApiOptions = { 
    method: "GET",
    url: "http://localhost:3001/api/private-scoped",
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

