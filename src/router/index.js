import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Index from '../pages/Index.vue'

const routes = [
{
  path: '/',
  name: 'index',
  component: Index
}]

const router = createRouter({
  history: createWebHashHistory(), // hash 模式 createWebHashHistory(process.env.BASE_URL) 历史模式
  routes
})

function newFunction() {
  localStorage.setItem("router", JSON.stringify(children))
}

export default router