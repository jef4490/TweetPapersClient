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

  static readView() {

  }

  static writeView() {

  }
}
