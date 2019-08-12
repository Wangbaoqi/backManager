import axios from 'axios'

export default {
  
  /**
   * axios instance
   */
  axiosIntance: axios.create({
    baseURL: '',
    timeout: 1000,
  }),

  /**
   * get request
   * @param {*} url 
   */
  _getRequest(url, params) {
    return this._requestPromise(this.axiosIntance.get(url, {params: params}))
  },

  /**
   * post request
   * @param {*} url 
   * @param {*} body 
   */
  _postRequest(url, body) {
    return this._requestPromise(this.axiosIntance.post(url, body))
  },

  /**
   * put request
   * @param {*} url 
   * @param {*} body 
   */
  _putRequest(url, body) {
    return this._requestPromise(this.axiosIntance.put(url, body))
  },

  /**
   * request promise 
   * @param {*} request 
   */
  _requestPromise(request) {
    return new Promise((resolve, reject) => {
      request.then(res => {
        if(res.status === 200) {
          resolve(res.data)
        }else {
          reject(res.statusText)
        }
      }, error => {
        reject(error)
      })
    })
  }
}