class TweetEssayController {
  constructor($target, timelineObject) {
    this.$target = $target
    this.regex = timelineObject.regex
    this.tweets = this.makeTweets(timelineObject.filteredTimeline)
    this.renderUser()
    this.renderEssay()
  }

  makeTweets(filteredTweets){
    return filteredTweets.map((tweet) => {
      return new Tweet(tweet)
    })
  }

  renderEssay(){
    return EssayView.renderParagraph(this.$target, this)
  }

  renderUser(){
    return EssayView.renderUser(this.$target, this)
  }
}
