class InitialController {

  constructor() {
    this.setInitialView()
    this.setHeaderListener()
    this.setInitialListener()
  }

  setInitialListener(){
    return  $('.hover').on('click', function(event) {
      InitialView.renderPage(event)
      })
    }

    setHeaderListener(){
      return $('.header').on('click', function(event) {
        new InitialController()
      })
    }

  setInitialView(){
  InitialView.renderInitial()
  }

}
