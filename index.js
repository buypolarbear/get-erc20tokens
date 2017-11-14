var fs = require('fs');
var ethScan = require('./controller/ethScan');

var icoList = JSON.parse(fs.readFileSync('ico.json', 'utf8'));

icoList.forEach(function (item) {
    var id = item.symbol;
    console.log(id);
    var erc20Token = ethScan.erc20Token(id);
});

