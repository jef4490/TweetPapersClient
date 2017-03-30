class WriteView {
  static renderWriteView() {
    $('.input').html(WriteView.writeViewInputTemplate())
    $('.output').html(WriteView.writeViewOutputTemplate())
  }

  static writeViewInputTemplate() {
    return `<div class="write-wrapper container">
      <div class="row">
        <h1>Tweet Papers</h1>
        <h4>When you can't fit the profound in 140 characters.</h4>
      </div>
        <div class="prompt">
          <p>To get started, copy/paste your essay in the text box below.</p>
          <form class="essay-text-form" id="essay-text-form">
            <textarea placeholder="Your essay here" class="write-essay-text" id="write-essay-text"/></textarea>
            <br>
            <input type="Submit" value="Compose Essay" id="write-essay-submit"/>
          </form>
        </div>`
  }

  static writeViewOutputTemplate() {
    return `  <div class="essay-tweets-display">
      </div>`
  }
}
