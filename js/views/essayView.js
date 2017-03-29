class EssayView {
  static renderParagraph($target, essay){
    debugger
    let essayText = essay.tweets.map((tweet) => {
      debugger
      return tweet.text.replace(this.regex, "")
    }).join("")
    return $target.html(`<p>${essayText}</p>`)
  }
}


//   // static essayTemplate(essay){
//   //   return `
//   //     <h1>${}</h1>
//   //     <blockquote class="blockquote">
//   //       <p class="mb-0">${cocktail.description}</p>
//   //       <footer class="blockquote-footer">${cocktail.source.replace("—", "")}</footer>
//   //     </blockquote>
//   //     <ul class="proportions">
//   //       ${this.proportions(cocktail.proportions)}
//   //     </ul>
//   //     <p>${cocktail.instructions}</p>
//   //   `
//   // }
//
//   // static proportions(proportions){
//   //   return proportions.map((proportion) => {
//   //     return `<li>${proportion}</li>`
//   //   }).join("")
//   // }
//   //
//   // static renderListItems($target, cocktails){
//   //   let listItems = cocktails.map(this.listItemTemplate)
//   //   $target.append(listItems)
//   // }
//   //
//   // static listItemTemplate(cocktail) {
//   //   return `
//   //   <li class="cocktail-list-item" data-id="${cocktail.id}"><a href="#">${cocktail.name}</a></li>
//   //   `
//   // }
// }
