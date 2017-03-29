$(() => {
  let $target = $('.tweet-url-form')
  $('.tweet-url-form').on('submit', () => {
    let raw_tweet_data = TweetAPIController.new
     return raw_tweet_data
  }).then((raw_tweet_data) => {
    debugger;
  })
})
