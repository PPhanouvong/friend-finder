//The operator dependancies
var operatorList = require('../data/friends.js');

var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app) {

    // Search for Specific Character (or all characters) - provides JSON
    app.get('/api/friends', function (req, res) {
        res.json(operatorList);
    });

    //Creating New Characters - takes in JSON data

    app.post('/api/friends', function (req, res) {

        //The functions that will return our match
        var bestMatch = {
            'name': 'none',
            'photo': 'none'
        };

        function sum(array) {
            var total = 0;
            for (var n = 0; n < array.length; n++) {
                total += parseInt(array[n]);

            }
            return total;
        }

        var userTotal = sum(req.body.scores);

        var operatorTotal = 0;

        for (var i = 0; i < operatorList.length; i++) {
            operatorTotal = sum(operatorList[i].scores);
            //console.log(operatorTotal);
            if (operatorTotal == userTotal) {
                bestMatch.name = operatorList[i].name;
                bestMatch.photo = operatorList[i].photo;
            }
        };
        if (bestMatch.name == 'none') {
            var closest = 50;

            for (var i = 0; i < operatorList.length; i++) {
                operatorTotal = sum(operatorList[i].scores);
                var difference = Math.abs(operatorTotal - userTotal);
                if (difference <= closest) {
                    closest = difference;
                    bestMatch.name = operatorList[i].name;
                    bestMatch.photo = operatorList[i].photo;
                };
            };
        };
        res.json(bestMatch);
    });
};