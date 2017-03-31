$(() => {
    new InitialController()
    $.get('http://localhost:3000/ghost').then((ghost) => {
      $('.working-status').html(`<div class="ready-status">${ghost}</div>`)
    }).catch( () => {
      $('.working-status').html("<div class='failed-status'>Unable to connect</div>")
    })
  }
)
