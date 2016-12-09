var tweet = ["Are you sure about that?",
              "That looks fabulous!",
              "Who dressed you, the great depression?",
              "Follow your heart.",
              "Girl you've got spunk!"
             ];


function giveAdvice() {
  var resultTweet = tweet[Math.floor(Math.tweet()*tweet.length)];
  return resultTweet;
}


exports.resultTweet = giveAdvice;
