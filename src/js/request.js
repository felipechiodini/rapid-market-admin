import Api from "./api"


export default class request {

  constructor(params) {
    this.api
  }

  request(api, callback) {
    const Api 
    api.then(({ data }) => {
      callback(data)
    }).catch((errros) => {
      console.log(errros)
    })
  }

}