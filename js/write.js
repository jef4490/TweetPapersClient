// Write Tweet Essay
$(() => {
  $('.essay-text-form').on('submit', () => {
    event.preventDefault();
    let $text = $('#write-essay-text').val()
    let essay = new Essay($text)
    debugger;
  })
})
