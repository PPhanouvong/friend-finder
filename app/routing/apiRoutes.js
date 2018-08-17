var operators = require("../data/friends");

module.exports = function(app) {
  // Return all operators found in friend.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(operators);
  });

  app.post("/api/friends", function(req, res) {

    // Receive user details (name, photo, scores)
    var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.score.length; i++) {
      user.score[i] = parseInt(user.score[i]);
    };

    // default operator match is the first operator but result will be whoever has the minimum difference in scores
    var operatorIndex = 0;
    var minimumDifference = 40;
    // res.json(user);
    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var n = 0; n < operators.length; n++) {
      var totalDifference = 0;
      console.log(operators[n].score);
      for(var j = 0; j < operators[n].score.length; j++) {
        var difference = Math.abs(user.score[j] - operators[n].score[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        operatorIndex = n;
        minimumDifference = totalDifference;
      }
    }
    console.log(minimumDifference);
    console.log(totalDifference);
    // after finding match, add user to friend array
    operators.push(user);

    // send back to browser the best friend match
    res.json(operators[operatorIndex]);
  });
};