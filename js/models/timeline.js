class Timeline {

  constructor(timeline, tweet) {
    this.userId = tweet.userId
    this.regex = tweet.regex
    this.originalTweetId = tweet.tweetId
    this.originalReplyID = tweet.replyToId
    this.timeline = timeline
    this.filterTweets()
  }

  filterTweets() {
    var arr = []
    var replyId = this.originalTweetId
    this.timeline.forEach((item) => {
      if (item.id_str == replyId) {
        replyId = item.in_reply_to_status_id_str
        arr.unshift(item)
          if (replyId == null) {
            replyId = 'done'
          }
      } else {
      }
    })
    return this.filteredTimeline = arr
  }
}
