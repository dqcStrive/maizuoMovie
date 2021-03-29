import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.axios = axios

Vue.filter('setWH',function(url,arg){
  return url.replace(/w\.h/,arg);
})

Vue.filter('dateFormat',function(dateStr,time){
  let date = new Date(dateStr);
  let year = date.getFullYear();
  let month = date.getMonth() + 1<10 ? '0' + (date.getMonth()+1) : date.getMonth()+1;
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  if(time&&time.toLowerCase() === 'yyyy-mm-dd'){
    return `${year}-${month}-${day}`;
  }else if(time&&time.toLowerCase() === 'hh:mm:ss') {
    return `${hh}:${mm}:${ss}`;
  }else{
    return `${month}-${day} ${hh}:${mm} `;
    // return `${year}-${month}-${day} ${hh}:${mm}`;
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
