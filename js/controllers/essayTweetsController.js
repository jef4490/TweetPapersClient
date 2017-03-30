class EssayTweetsController {
  constructor($target, essay) {
    this.$target = $target
    this.tweets = essay.tweets
    this.render()
  }

  render(){
    return EssayTweetsView.renderTweets(this.$target, this.tweets)
  }

}
