import {
  Button,
  Input,
  Avatar,
  Card,

} from 'ant-design-vue'
const ant = {
  install(Vue) {
    Vue.component(Button.name, Button)
    Vue.component(Button.Group.name, Button.Group)
    Vue.component(Input.name, Input)
    Vue.component(Input.Search.name, Input.Search)
    Vue.component(Avatar.name, Avatar)
    Vue.component(Card.name, Card)
  },
}
export default ant