class EssayView {

  static renderParagraph($target, essay){
    let essayText = essay.tweets.map((tweet, index) => {
      let text = tweet.text.replace(essay.regex, "")
      return EssayView.spanFormat(text, index)
    }).join("")
    return $target.find('#essay').html(EssayView.essayTemplate(essayText))
  }

  static renderUser($target, essay){
    return $target.find('#user').html(EssayView.userTemplate(essay))
  }

  static essayTemplate(essayText) {
    let linkText = EssayView.linkFormat(essayText)
    return `<h3>Essay:</h3>
    <p id="essay-text">${linkText}</p><br>
    <div class='row'>
      <input type="Submit" class="essay-buttons" value="Copy To Clipboard" id="copy-essay"/>
      <input type="Submit" class="essay-buttons" value="Generate Embed HTML" id="generate-essay-html"/>
    </div>`

  }

  static userTemplate(essay) {
    let user = essay.tweets[0].user
    return `<h3>Initial Tweet:</h3>
    ${HtmlGeneratorView.tweetTemplate(essay.tweets[0])}
    `
  }

  static spanFormat(text, index) {
    let startTag = `<span data-type="s" data-id="${index}" >`
    let closeTag = '</span>'
    let wordArr = text.split(" ")
    wordArr.push(closeTag)
    wordArr.unshift(startTag)
    return wordArr.join(" ")
  }

  static linkFormat(text) {
    let wordArray = text.split(' ')
    let regexLink = /(https|ftp|http):\/\/.+[^.!?)(]/
    wordArray = wordArray.map((item) => {
      if (item.search(regexLink) != -1) {
        let hyperlink = `<a href="${item.match(regexLink)[0]}">${item.match(regexLink)[0]}</a>`
        if (item.search(/[.!?)()]$/) != -1 || item.search(/^[.!?)()]/) != -1) {
          hyperlink += item.match(/[.!?)(]$/)
          hyperlink = item.match(/^[.!?)(]/) + hyperlink
        }
        return hyperlink
      } else {
        return item
      }
    })
    return wordArray.join(" ")
  }
}
