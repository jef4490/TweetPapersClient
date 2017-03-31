class HtmlGeneratorView {

  static renderEmbedHtml(essay) {
    let timelineHtmlArray = essay.tweets.reduce((a, b) =>{
      a.push(HtmlGeneratorView.tweetTemplate(b))
      return a
    }, [])
    let timelineHtmlCode = timelineHtmlArray.join("")
    $('#tweet-render').html(`<h3>Tweet Essay:</h3>${timelineHtmlCode}`)
    $('#html-render').html(`${HtmlGeneratorView.formTemplate(timelineHtmlCode)}`)
  }

  static tweetTemplate(tweet) {
    return `<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">${tweet.text}</p>&mdash; ${tweet.user.name} (${tweet.user.screenName})<a href="${tweet.tweetLink}">${tweet.date.split(" ").slice(0, 3).join(" ")}</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></br>`
  }

  static formTemplate(html) {
    return `<h3>Raw HTML:</h3></br><textarea class="form-control" id="essay-raw-html" rows="5">${html}</textarea>`
  }
}
