var operators = require("../data/friends");

module.exports = function(app) {
  // Return all operators found in friend.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(operators);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Receive user details (name, photo, scores)
    var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    };

    // default operator match is the first operator but result will be whoever has the minimum difference in scores
    var operatorIndex = 0;
    var minimumDifference = 40;
    // res.json(user);
    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < operators.length; i++) {
      var totalDifference = 0;
      console.log(operators[i].score);
      for(var j = 0; j < operators[i].score.length; j++) {
        var difference = Math.abs(user.scores[j] - operators[i].score[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        operatorIndex = i;
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