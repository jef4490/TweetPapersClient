class ReadView {
  static renderReadView() {
    $('.input').html(ReadView.readViewInputTemplate())
    $('.output').html(ReadView.readViewOutputTemplate())
  }

  static readViewInputTemplate() {
    return `<div class="read-wrapper container row">
      <div class="prompt">
        <p>To get started, copy + paste the url of the last tweet from the tweet essay.</p>
        <form class="tweet-url-form" id="tweet-url-form">
          <input type="text" placeholder="Tweet URL" class="Tweet-URL-text" id="tweet-url-text"/>
          <input type="Submit" value="Compose Essay" id="tweet-submit"/>
        </form>
      </div>`
  }

  static readViewOutputTemplate() {
    return `<div class="tweet-essay-window">
      <div id="user" class="row">
      </div>
      <div id="essay" class="row">
      </div>
    </div>
    <div id="html-generator" class="row">
      <div id="tweet-render" class="col-xs-6">
      </div>
      <div id="html-render" class="col-xs-5">
      </div>
    </div>
    `
  }
}
