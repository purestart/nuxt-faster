import Vue from 'vue'
import ElementUI from 'element-ui';

import {Loading} from 'element-ui';


Vue.use(ElementUI);
Vue.prototype.$loading = Loading.service;
