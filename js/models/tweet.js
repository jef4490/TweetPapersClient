class Tweet {
  constructor(tweet) {
    this.initialText = tweet.text
    this.userId = text.user.id
    this.regex = nil
    const regexNumberStart = /^\d+\.*/
    const regexNumberEnd = /[-=|]*\d+$/
    const regexFractionStart = /^\d+\/\d+[->=|]*/
    const regexFractionEnd = /[-=|]*\d+\/\d+$/
  }

  function tweet_number() {
     if (regexNumberStart.test(tweet)) {
       this.regex = regexNumberStart
       return this.tweetFinal = this.initialText.match(this.regex)
     } else if (regexNumberEnd.test(tweet)) {
       this.regex = regexNumberEnd
       return this.tweetFinal = this.initialText.match(this.regex)
     } else if (regexFractionStart.test(tweet)) {
       this.regex = regexFractionStart
       return this.tweetFinal = this.initialText.match(this.regex)
     } else if (regexFractionEnd.test(tweet)) {
       this.regex = regexFractionEnd
       return this.tweetFinal = this.initialText.match(this.regex)
     } else {
       alert("error!")
     }
  }

}
