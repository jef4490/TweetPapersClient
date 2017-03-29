class TweetEssayController {
  constructor($target, timelineObject) {
    this.$target = $target
    this.regex = timelineObject.regex
    this.tweets = this.makeTweets(timelineObject.filteredTimeline)
    this.render()
  }

  makeTweets(filteredTweets){
    return filteredTweets.map((tweet) => {
      return new Tweet(tweet)
    })
  }

  render(){
    return EssayView.renderParagraph(this.target, this)
  }
}
