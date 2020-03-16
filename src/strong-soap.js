"use strict";

var soap = require('strong-soap').soap;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';

var requestArgs = {
  intA: 4,
  intB: 5
};

var options = {};
soap.createClient(url, options, function (err, client) {
  var method = client['Add'];
  method(requestArgs, function (err, result, envelope, soapHeader) {
    //response envelope
    console.log(`Response Envelope: \n ${envelope} \n`);
    //'result' is the response body
    console.log(`Result: \n ${JSON.stringify(result)} \n`);
    console.log(`Result: \n ${result.AddResult} \n`);
  });
});