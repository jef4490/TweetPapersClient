class Essay {
  constructor(text) {
    this.originalText = text
    this.i = -1
    this.links = text.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)
    this.linkless = text.replace(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm, `&K^jK&`)
    this.sentences = this.linkless.match(/(?!.?!).*?[.?!]+\)?/g)
    this.linkReplacer()
    this.sentences = this.linkSentences
    debugger;
    this.tweets = []
    this.constructTweets()
    return this
  }

  linkReplacer() {
    this.linkSentences = this.sentences.map( sentence => {
      if (sentence.match(/\&K\^jK&/g)) {
        this.links
        this.i ++
        return sentence = sentence.replace(/\&K\^jK&/g, this.links[this.i])
      }
      return sentence
    })
    return this.linkSentences
  }

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
