class Tweet {

  constructor(tweet) {
    this.text = tweet.text
    this.userId = tweet.user.id
    this.regex = null
    this.tweetId = tweet.id_str
    this.tweet_number()
  }

  tweet_number() {
    let regexNumberStart = /^\d+\.*/
    let regexNumberEnd = /[-=|]*\d+$/
    let regexFractionStart = /^\d+\/\d+[->=|]*/
    let regexFractionEnd = /[-=|]*\d+\/\d+$/

     if (regexNumberStart.test(this.text)) {
       this.regex = regexNumberStart
       return this.tweetCount = this.text.match(this.regex)[0].match(/\d+/)[0]
     } else if (regexNumberEnd.test(this.text)) {
       this.regex = regexNumberEnd
       return this.tweetCount = this.text.match(this.regex)[0].match(/\d+/)[0]
     } else if (regexFractionStart.test(this.text)) {
       this.regex = regexFractionStart
       return this.tweetCount = this.text.match(this.regex)[0].match(/\d+/)[0]
     } else if (regexFractionEnd.test(this.text)) {
       this.regex = regexFractionEnd
       return this.tweetCount = this.text.match(this.regex)[0].match(/\d+/)[0]
     } else {
       alert("error!")
     }
  }
}
