class ReadView {
  static renderReadView() {
    $('.input').html(ReadView.readViewInputTemplate())
    $('.output').html(ReadView.readViewOutputTemplate())
  }

  static readViewInputTemplate() {
    return `<div class="row">
      <h1>Tweet Papers</h1>
      <h4>When you can't fit the profound in 140 characters.</h4>
    </div>
    <div class="row">
      <div class="prompt">
        <p>To get started, copy + paste the url of the a tweet from the tweet essay.</p>
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
      <div id="tweet-render" class="col-md-6">
      </div>
      <div id="html-render" class="col-md-6">
      </div>
    </div>
    `
  }
}
