var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
var args = {
  intA: 4,
  intB: 5
};
soap.createClient(url, function (err, client) {
  client.Add(args, function (err, result) {
    console.log(result);
  });
});