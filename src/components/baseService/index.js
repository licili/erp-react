import urls from '../../contents/urls';
import axios from 'axios'
export default class BaseService {
  static ajax (options) {
    let MockApi = 'https://www.fastmock.site/mock/58322c7e71c4ed4503b95197370f9595/api';
    if (options.isMock) {
      options.baseURL = MockApi
    } else {
      options.baseURL = urls.baseURL;
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: options.method || 'post',
        // data: JSON.stringify(options.data || ''),
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        data:options.data,
        transformRequest: [function (data) {
          let str = ``;
          for (let key in data) {
            if (!data.hasOwnProperty(key)) break;
            str += `&${key}=${data[key]}`
          }
          str = str.substring(1);
          return str;
        }],
        timeout: 8000,
        baseURL:options.baseURL
      }).then((response) => {
        console.log(response,'hhhhh');
        if (response.status === 200) {
          let result = response.data;
          if (result.error) {
            console.log(result.error);
          }
          resolve(result.data)
        } else {
          reject(response.data)
        }
      }).catch(err => {
        console.log(`request URL ${err}`);
        resolve(err)
      })
    })
  }
}