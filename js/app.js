$(() => {
  let $target = $('.tweet-url-form')
  $('.tweet-url-form').on('submit', () => {
    event.preventDefault()
    let url = $('#tweet-url-text').val()
    let raw_tweet_data = new TweetAPIController(url)
     return raw_tweet_data
  })
})
