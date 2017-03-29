class Timeline {

  constructor(timeline, tweet) {
    this.userId = tweet.userId
    this.regex = tweet.regex
    this.originalTweetId = tweet.tweetId
    this.timeline = timeline
    this.filterTweets()
  }

  filterTweets() {
    return this.filteredTimeline = this.timeline.filter((item) => {
      return item.text.search(this.regex) != -1
    })
  }

}
