$(() => {
  var tweet = ''
  let $target = $('.tweet-essay-compiled')
  $('.tweet-url-form').on('submit', () => {
    event.preventDefault()
    let url = $('#tweet-url-text').val()
    let rawTweetData = new TweetAPIController(url)
    rawTweetData.retrieveTweet().then((rawTweetData) => {
      tweet = new Tweet(rawTweetData)
      TweetAPIController.retrieveTimeline(tweet).then((timeline) => {
        let timelineObject = new Timeline(timeline, tweet)
        let x = new TweetEssayController($target, timelineObject)

      })
    })
  })
})
