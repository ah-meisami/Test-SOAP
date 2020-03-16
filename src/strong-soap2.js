"use strict";

var soap = require('strong-soap').soap;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
var url = 'http://192.168.234.130:9502/analytics-ws/saw.dll/wsdl/v12';

var requestArgs = {
  sessionID: '5vkqjm4hsj3o3m34bie3ecdu55k4evdauedn9mrpmqjrk37t'
};

var options = {};
soap.createClient(url, options, function (err, client) {
  var method = client['getSubjectAreas'];
  method(requestArgs, function (err, result, envelope, soapHeader) {
    //response envelope
    console.log(`Response Envelope: \n ${envelope} \n`);
    //'result' is 'undefined'
  });
});