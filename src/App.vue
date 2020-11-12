<template>
  <div id="app">
    <NavBar></NavBar>
    <Index></Index>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Index from './pages/Index'
export default {
  name: 'App',
  components: {
    NavBar,
    Index
  }
}
</script>

<style>
body {
  background-color: #f6f6f6;
}
#app {
  height: auto;
  width: 100%;
}
a {
  color: #1890ff;
}
</style>
