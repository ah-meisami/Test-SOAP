var soap = require('soap');
var url = 'http://192.168.234.130:9502/analytics-ws/saw.dll/wsdl/v12';

var args = {
  sessionID: '5vkqjm4hsj3o3m34bie3ecdu55k4evdauedn9mrpmqjrk37t'
};

soap.createClient(url, function (err, client) {
  client.getSubjectAreas(args, function (err, result) {
    console.log('%o',result);


    var size = Object.keys(result.subjectArea).length;
    console.log(`size: ${size}\n`);
  });
});