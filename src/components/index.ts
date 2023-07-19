import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
const allGloablcomponent: any = { SvgIcon, Pagination }

export default {
  install(app: any) {
    Object.keys(allGloablcomponent).forEach((key) => {
      //注册为全局组件
      app.component(key, allGloablcomponent[key])
    })
  }
}
