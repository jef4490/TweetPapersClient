class EssayTweetsView {
  static renderTweets($target, tweets){
    tweets.forEach((tweet, index) => {
      let tweetParagraph = `<p id="tweet-${index+1}">${index+1}. ${tweet.text}</p>`
      $target.append(tweetParagraph)
    })
    return null
  }
}
