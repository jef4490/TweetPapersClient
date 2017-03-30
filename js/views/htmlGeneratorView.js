class HtmlGeneratorView {

  static renderEmbedHtml(essay) {
    // let $target = $('#html-generator')
    let end = essay.tweets.reduce((a, b) =>{
      a.push(HtmlGeneratorView.tweetTemplate(b))
      return a
    }, [])
    $('#html-generator').html(`${end.join("")}`)
  }

  static tweetTemplate(tweet) {
    return `<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">${tweet.text}</p>&mdash; ${tweet.user.name} (${tweet.user.screenName})<a href="${tweet.tweetLink}">${tweet.date.split(" ").slice(0, 3).join(" ")}</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></br>`
  }
}
