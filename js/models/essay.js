class Essay {
  constructor(text) {
    this.originalText = text
    // debugger;
    this.sentences = text.match(/["']?[A-Z][^.?!]+((?![.?!]['"]?\s["']?[A-Z][^.?!]).)+[.?!'"]+/g)
    this.tweets = []
    this.constructTweets()
    return this
  }

  //Don't let it split a word, Jeff!
  //Fix the problems, Jeff!
  // Add spaces to short sentence combinations
  constructTweets() {
    let i = 0
    while (i < this.sentences.length) {
      if (this.sentences[i].length > 135) {
        let midpoint = Math.floor(this.sentences[i].length/2)
          while (this.sentences[i][midpoint] != " ") {
            midpoint ++
          }
        this.tweets.push(new EssayTweet(this.sentences[i].slice(0, midpoint)))
        this.tweets.push(new EssayTweet(this.sentences[i].slice(midpoint, this.sentences[i].length)))
        i++
      }
      let current = ""
      while (this.sentences[i] && current.length + this.sentences[i].length <= 135) {
        current += (" " + this.sentences[i])
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
