var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

module.exports = {

    erc20Token: function (id) {

        var ethScanWebsite = 'https://etherscan.io/search?q=' + id;

        request(ethScanWebsite, function (error, response, html) {
            if (!error && response.statusCode == 200) {

                var $ = cheerio.load(html);
                var data = {};

                // Get Address using Cheerio Parsing results of http://etherscan.io network
                var _address = $('#ContentPlaceHolder1_trContract').children().first().next().children().text();

                data.id = id;
                data._address = _address;
                console.log(_address);
                fs.appendFileSync('results/address.json', JSON.stringify(data) + ",\n");
            }
        });
        return;
    }
}