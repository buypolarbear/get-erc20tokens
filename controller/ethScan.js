var request = require('request');
var cheerio = require('cheerio');

module.exports = {

    erc20Token: function (id) {

        // Sample data-structure for indexing values
        // data = {
        //     "id": symbol,
        //     "url": url,
        //     "concept": concept,
        //     "contents": [
        //         {
        //             "title": home_page_title,
        //             "data": home_content
        //         },
        //         {
        //             "title": team_page_title,
        //             "data": team_page_content
        //         }
        //     ]
        // };

        var ethScanWebsite = 'https://etherscan.io/search?q=' + id;

        request(ethScanWebsite, function (error, response, html) {
            if (!error && response.statusCode == 200) {
                 // console.log(html);
                var $ = cheerio.load(html);

                var data = {};

                var _address = $('#ContentPlaceHolder1_trContract').children().first().next().children().text();
                console.log('tst');
                console.log(_address);


            }
        });
        return;
    }
}