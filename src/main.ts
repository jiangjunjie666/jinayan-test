import { createApp } from 'vue'
import App from '@/App.vue'
//svg插件配置
import 'virtual:svg-icons-register'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置element-plus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(ElementPlus)

app.use(ElementPlus, {
  locale: zhCn
})
//引入自定义插件，其中放有所有的自定义全局组件
import gloalComponent from '@/components'
//安装自定义插件
app.use(gloalComponent)
//引入模板全局样式
import '@/style/index.scss'

//测试mock接口
// import axios from 'axios'
// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '111111'
//   }
// })
app.mount('#app')
