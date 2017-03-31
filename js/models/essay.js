class Essay {
  constructor(text) {
    this.originalText = text
    this.i = -1
    this.links = text.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)
    this.linkless = text.replace(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm, `&K^jK&`)
    this.sentences = this.linkless.match(/(?!.?!).*?[.?!\r\n]+[\)”"]?/g)
    this.linkReplacer()
    this.sentences = this.linkSentences
    this.tweets = []
    this.constructTweets()
    return this
  }

  linkReplacer() {
    this.linkSentences = this.sentences.map( sentence => {
      if (sentence.match(/\&K\^jK&/g)) {
        this.i ++
        return sentence = sentence.replace(/\&K\^jK&/g, this.links[this.i])
      }
      return sentence
    })
    return this.linkSentences
  }

  splitConstruct(sentencePortion){
    if (sentencePortion.length <= 135) {
      return this.tweets.push(new EssayTweet(sentencePortion))
    }
    let midpoint = Math.floor(sentencePortion.length/2)
    while (sentencePortion[midpoint] != " ") {
      midpoint++
    }
    this.splitConstruct(sentencePortion.slice(0, midpoint))
    this.splitConstruct(sentencePortion.slice(midpoint, sentencePortion.length))
  }

  constructTweets() {
    let i = 0
    while (i < this.sentences.length) {
      if (this.sentences[i].length > 135) {
        this.splitConstruct(this.sentences[i])
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
