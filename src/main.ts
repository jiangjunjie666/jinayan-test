import { createApp } from 'vue'
// @ts-expect-error
import App from './App.vue'

createApp(App).mount('#app')

const fun = () =>     {

  console.log(111);
};
fun();
