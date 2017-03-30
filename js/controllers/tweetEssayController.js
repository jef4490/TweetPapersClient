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
    EssayView.renderParagraph(this.$target, this)
    return this.setEssayCopyListener()
  }

  renderUser(){
    return EssayView.renderUser(this.$target, this)
  }

  setEssayCopyListener() {
    $('#copy-essay').on("click", (event) => {
      event.preventDefault()
      var text = document.getElementById('essay');
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
    })
  }

}
