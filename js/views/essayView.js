class EssayView {
  static renderParagraph($target, essay){
    let essayText = essay.tweets.map((tweet) => {
      return tweet.text.replace(essay.regex, "")
    }).join("")
    let linkText = EssayView.linkFormat(essayText)
    return $target.html(`<p>${linkText}</p>`)
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
