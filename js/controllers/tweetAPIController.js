class TweetAPIController {
  constructor(url) {
    this.tweetStrip(url)
  }

  tweetStrip(tweetLink) {
    this.tweetNumber = tweetLink.replace(/.*status\//g,"")
  }

  retrieveTweet() {
    return Api.getJSON(`tweet/${this.tweetNumber}`)
  }

  static retrieveTimeline(tweet) {
    return Api.getJSON(`tweet/${tweet.tweetId}/${tweet.userId}/${parseInt(tweet.tweetCount)*2}`)
  }
}
