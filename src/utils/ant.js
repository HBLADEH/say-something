import {
  Button,
  Input
} from 'ant-design-vue'
const ant = {
  install(Vue) {
    Vue.component(Button.name, Button)
    Vue.component(Input.name, Input)
  },
}
export default ant