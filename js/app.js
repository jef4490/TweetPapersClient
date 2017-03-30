// Read Tweet Essay
$(() => {
  $('.hover').on('click', function(event) {
    InitialView.displayInstructions(event)
  })
}
)

// $('.tweet-url-form').on('click',
//   var tweet = ''
//   let $target = $('.tweet-essay-window')
//
//   $('.tweet-url-form').on('submit', () => {
//     event.preventDefault()
//     let url = $('#tweet-url-text').val()
//     let rawTweetData = new TweetAPIController(url)
//     rawTweetData.retrieveTweet().then((rawTweetData) => {
//       tweet = new Tweet(rawTweetData)
//       TweetAPIController.retrieveTimeline(tweet).then((timeline) => {
//         let timelineObject = new Timeline(timeline, tweet)
//         let x = new TweetEssayController($target, timelineObject)
//       })
//     })
//   })
// })

// Write Tweet Essay
