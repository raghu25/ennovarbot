// Description:
//   Play Blackjack through hubot
//
// Dependencies:
//
//
// Commands:
//   hubot deal - Puts you in the current blackjack game.  Starts a new game if there is none.
//   hubot hit - Adds 1 card to your hand
//   hubot stand - Holds your current total until the end of the round
//
//
// Author:
//   Ryan Fisher and Austin Crane

// sleep time expects milliseconds
 function sleep (time) {
   return new Promise((resolve) => setTimeout(resolve, time));
}
module.exports = function(robot) {
	robot.respond(/bomb (\w)$/i, function(msg) {
    var user = msg.match[1];
    if (user.indexOf('@') !== -1) {
      for ( var i = 0; i < 10; i++) {
        function(i) {
          setTimeout(function() {
            robot.messageRoom(user, "booooomb ");
          }, 500 * i )
        })(i);
      }
    } else {
      for ( var i = 0; i < 10; i++) {
        function(i) {
          setTimeout(function() {
            msg.send("booooomb " + user);
          }, 500 * i )
        })(i);
      }
    }
  });
}
