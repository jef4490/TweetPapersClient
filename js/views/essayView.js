class EssayView {

  static renderParagraph($target, essay){
    let essayText = essay.tweets.map((tweet) => {
      return tweet.text.replace(essay.regex, "")
    }).join("")
    let linkText = EssayView.linkFormat(essayText)
    return $target.find('#essay').html(`<p>${linkText}</p><br />
    <input type="Submit" value="Copy To Clipboard" id="copy-essay"/>`)
  }

  static renderUser($target, essay){
    return $target.find('#user').html(EssayView.userTemplate(essay))
  }

  static userTemplate(essay) {
    let user = essay.tweets[0].user
    return `<h2><a href="${user.link}">${user.screenName}</a></h2>
    <h2><a href="${essay.tweets[0].tweetLink}">--Start of Essay--</a></h2>
    <img src="${user.profilePicture}"/>
    <h3>on ${essay.tweets[0].date}</h3>`
  }

  static linkFormat(text) {
    let linkArray = text.split(' ')
    let regexLink = /(https|ftp|http):\/\/.+[^.!?)(]/
    linkArray = linkArray.map((item) => {
      if (item.search(regexLink) != -1) {
        let hyperlink = `<a href="${item.match(regexLink)[0]}">${item.match(regexLink)[0]}</a>`
        if (item.search(/[.!?)()]$/) != -1) {
          hyperlink += item.match(/[.!?)(]$/)[0]
        }
        return hyperlink
      } else {
        return item
      }
    })
    return linkArray.join(" ")
  }

}
