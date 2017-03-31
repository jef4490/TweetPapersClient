class EssayView {

  static renderParagraph($target, essay){
    let essayText = essay.tweets.map((tweet) => {
      return tweet.text.replace(essay.regex, "")
    }).join("")
    return $target.find('#essay').html(EssayView.essayTemplate(essayText))
  }

  static renderUser($target, essay){
    return $target.find('#user').html(EssayView.userTemplate(essay))
  }

  static essayTemplate(essayText) {
    let linkText = EssayView.linkFormat(essayText)
    return `<p id="essay-text">${linkText}</p><br>
    <div class='row'>
      <input type="Submit" class="col-md-3" value="Copy To Clipboard" id="copy-essay"/>
      <input type="Submit" class="col-md-3" value="Generate Embed HTML" id="generate-essay-html"/>
    </div>`

  }

  static userTemplate(essay) {
    let user = essay.tweets[0].user
    return `
    ${HtmlGeneratorView.tweetTemplate(essay.tweets[0])}
    `
  }

  static linkFormat(text) {
    let wordArray = text.split(' ')
    let regexLink = /(https|ftp|http):\/\/.+[^.!?)(]/
    wordArray = wordArray.map((item) => {
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
    return wordArray.join(" ")
  }

}

// <h2><a href="${user.link}">${user.screenName}</a></h2>
// <img src="${user.profilePicture}"/>
// <h3>on ${essay.tweets[0].date}</h3>
