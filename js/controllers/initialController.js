class InitialController {

  constructor() {
    this.setInitialListener()
  }

  setInitialListener(){

    return  $('.hover').on('click', function(event) {
      InitialView.renderPage(event)
      })
    }
}
