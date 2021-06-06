let urls = {};
let protocal = window.location.protocol;
let host = window.location.host;

urls.baseURL = protocal + '//' + host

urls.login = '/login'
urls.order_list = '/order/list'

export default urls;