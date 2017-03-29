class Api {

  static getJSON(resource){
    return $.getJSON(`http://localhost:3000/${resource}`)
  }

}
