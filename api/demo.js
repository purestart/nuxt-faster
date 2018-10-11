/*
* Description:demo api请求页
* Author:詹陈龙
* Update:2018-08-03
*/
import setting from './set-axios';
const fetch = setting();

export default {
  login: fetch.bind(this, '/users/login', 'get'),
  //登录
};
