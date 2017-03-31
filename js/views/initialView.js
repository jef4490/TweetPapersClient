class InitialView {
  static renderPage (event){
    if (event.target.closest("div").classList[0] == "read"){
      $('.input').html('')
      new ReadController()
    } else if (event.target.closest("div").classList[0] == "write") {
      $('.input').html('')
      new WriteController()
    } else {
    }
  }

  static renderInitial(){
    $('.output').html('')
    $('.input').html(`
      <div class="button row-fluid">
        <div class="read bordered hover row-fluid">
          <h1 class='off'>Read a Twitter Essay!</h1>
        </div>
        <div class="write bordered hover row-fluid">
          <h1 class='off'>Write a Twitter Essay!</h1>
        </div>
      </div>
    `)
  }

  static readView() {

  }

  static writeView() {

  }
}
