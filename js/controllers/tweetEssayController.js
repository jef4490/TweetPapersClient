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
    this.setParagraphListener()
    this.setEmbedListener()
    return this.setEssayCopyListener()
  }

  renderUser(){
    return EssayView.renderUser(this.$target, this)
  }

  setEssayCopyListener() {
    $('#copy-essay').on("click", (event) => {
      event.preventDefault()
      var text = document.getElementById('essay-text');
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
    })
  }

  setEmbedListener() {
    $('#generate-essay-html').on("click", (event) => {
      HtmlGeneratorView.renderEmbedHtml(this)
    })
  }

  setParagraphListener() {
    $(window).keydown((e) => {
      if (e.key == "Alt") {
        $('p').on("click", (event) => {
          let $paragraphBreak = event.target
          if ($paragraphBreak.dataset.id == 's') {
            $( '</p><p>' ).insertBefore( $paragraphBreak )
          } else {
            $( '</p><p>' ).insertAfter( $paragraphBreak )
          }
        })
      } else {
      }
    })
  }

}
