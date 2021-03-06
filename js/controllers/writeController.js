class WriteController {
  constructor() {
    WriteView.renderWriteView()
    this.attachListeners()
  }

  attachListeners() {
    $('.essay-text-form').on('submit', () => {
      event.preventDefault();
      let $text = $('#write-essay-text').val()
      let $target = $('.essay-tweets-display')
      let essay = new Essay($text)
      let y = new EssayTweetsController($target, essay)
    })
  }
}
