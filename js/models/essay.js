class Essay {
  constructor(text) {
    this.originalText = text
    this.sentences = text.match(/\(?[^\.\?\!]+[\.!\?]\)?/g)
    this.tweets = []
    this.constructTweets()
    return this
  }

  constructTweets() {
    let i = 0
    while (i < this.sentences.length) {
      if (this.sentences[i].length > 135) {
        let midpoint = Math.floor(this.sentences[i].length)
        this.tweets.push(new EssayTweet(this.sentences.slice(0, midpoint)))
        this.tweets.push(new EssayTweet(this.sentences.slice(midpoint, this.sentences[i].length)))
        i++
      }
      let current = ""
      while (this.sentences[i] && current.length + this.sentences[i].length <= 135) {
        current += this.sentences[i]
        i++
      }
      let tweet = new EssayTweet(current)
      this.tweets.push(tweet)
    }
  }
  // gatherText() {
  //   debugger;
  // }
}
